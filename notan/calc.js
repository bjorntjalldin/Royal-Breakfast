/*
 * Notan – ren beräkningslogik (inga DOM-beroenden).
 * Alla belopp hanteras internt i öre (heltal) för att undvika flyttalsfel.
 * Fungerar både i webbläsare (window.NotanCalc) och i Node (module.exports).
 */
(function (factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else window.NotanCalc = api;
})(function () {
  'use strict';

  /** Tolka ett inmatat belopp ("1 234,50", "1234.5", "1 234") till öre. Returnerar null om ogiltigt. */
  function parseAmount(input) {
    if (input === null || input === undefined) return null;
    let s = String(input).trim().replace(/\s+/g, '').replace(/kr$/i, '');
    if (!s) return null;
    // Om både punkt och komma finns: sista avgränsaren är decimaltecken
    const lastComma = s.lastIndexOf(',');
    const lastDot = s.lastIndexOf('.');
    if (lastComma >= 0 && lastDot >= 0) {
      const decSep = lastComma > lastDot ? ',' : '.';
      const thouSep = decSep === ',' ? '.' : ',';
      s = s.split(thouSep).join('').replace(decSep, '.');
    } else {
      s = s.replace(',', '.');
    }
    if (!/^-?\d+(\.\d{0,2})?$/.test(s)) return null;
    const value = Math.round(parseFloat(s) * 100);
    if (!Number.isFinite(value)) return null;
    return value;
  }

  /**
   * Dela ett belopp (öre) lika mellan deltagarna. Eventuella rest-ören fördelas
   * deterministiskt på de första deltagarna så att summan alltid stämmer exakt.
   * Returnerar { memberId: öre }.
   */
  function splitEqually(amountCents, participantIds) {
    const ids = [...participantIds];
    const n = ids.length;
    const result = {};
    if (n === 0) return result;
    const base = Math.floor(amountCents / n);
    let remainder = amountCents - base * n;
    for (const id of ids) {
      let share = base;
      if (remainder > 0) { share += 1; remainder -= 1; }
      result[id] = share;
    }
    return result;
  }

  /**
   * Beräkna per medlem: betalat, andel och netto (betalat − andel) i öre.
   * Positivt netto = ska få tillbaka pengar. Negativt netto = ska betala.
   * Utgifter som refererar till borttagna medlemmar filtreras bort.
   */
  function computeBalances(memberIds, expenses) {
    const members = new Set(memberIds);
    const paid = {}, share = {};
    for (const id of memberIds) { paid[id] = 0; share[id] = 0; }
    let total = 0;
    let settled = 0;
    let count = 0;

    for (const e of expenses) {
      if (!e || !Number.isFinite(e.amount) || e.amount <= 0) continue;
      if (!members.has(e.paidBy)) continue;
      const participants = (e.participants || []).filter((id) => members.has(id));
      if (participants.length === 0) continue;

      paid[e.paidBy] += e.amount;
      const shares = splitEqually(e.amount, participants);
      for (const id of participants) share[id] += shares[id];

      if (e.type === 'settlement') settled += e.amount;
      else { total += e.amount; count += 1; }
    }

    const net = {};
    for (const id of memberIds) net[id] = paid[id] - share[id];
    return { paid, share, net, total, settled, count };
  }

  /**
   * Föreslå vem som betalar vem. Girig algoritm: största skuld möts mot största
   * fordran. Ger högst (antal medlemmar − 1) överföringar.
   * Returnerar [{ from, to, amount }] i öre, sorterade efter belopp.
   */
  function settle(net) {
    const debtors = [], creditors = [];
    for (const [id, v] of Object.entries(net)) {
      if (v < 0) debtors.push({ id, amount: -v });
      else if (v > 0) creditors.push({ id, amount: v });
    }
    debtors.sort((a, b) => b.amount - a.amount || a.id.localeCompare(b.id));
    creditors.sort((a, b) => b.amount - a.amount || a.id.localeCompare(b.id));

    const transfers = [];
    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
      const d = debtors[i], c = creditors[j];
      const amount = Math.min(d.amount, c.amount);
      if (amount > 0) transfers.push({ from: d.id, to: c.id, amount });
      d.amount -= amount;
      c.amount -= amount;
      if (d.amount === 0) i += 1;
      if (c.amount === 0) j += 1;
    }
    transfers.sort((a, b) => b.amount - a.amount);
    return transfers;
  }

  /** Formatera öre till text, t.ex. 123456 → "1 234,56 kr" (sv-SE). */
  function formatCents(cents, currency) {
    const value = (cents || 0) / 100;
    const decimals = (cents || 0) % 100 === 0 ? 0 : 2;
    try {
      return new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: currency || 'SEK',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }).format(value);
    } catch (e) {
      return value.toLocaleString('sv-SE', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + ' ' + (currency || 'kr');
    }
  }

  return { parseAmount, splitEqually, computeBalances, settle, formatCents };
});
