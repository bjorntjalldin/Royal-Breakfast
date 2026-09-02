/* Förenklat nät över Paris metro/RER med nyckelstationer.
   Restider i minuter mellan på varandra följande nyckelstationer (uppskattningar).
   Används för att föreslå rutter mellan attraktioner – inte en officiell reseplanerare. */

window.PARIS = window.PARIS || {};

PARIS.NETWORK = [
  { line: "1", stations: [
    ["La Défense", 4], ["Les Sablons", 5], ["Charles de Gaulle–Étoile", 2], ["George V", 1.5], ["Franklin D. Roosevelt", 1.5],
    ["Champs-Élysées–Clemenceau", 1.5], ["Concorde", 1.5], ["Tuileries", 1.5], ["Palais Royal–Musée du Louvre", 1.5],
    ["Louvre–Rivoli", 1.5], ["Châtelet", 1.5], ["Hôtel de Ville", 1.5], ["Saint-Paul", 1.5], ["Bastille", 2],
    ["Gare de Lyon", 4], ["Nation", 0]
  ]},
  { line: "2", stations: [
    ["Charles de Gaulle–Étoile", 6], ["Villiers", 4], ["Place de Clichy", 1.5], ["Blanche", 1.5], ["Pigalle", 1.5],
    ["Anvers", 1.5], ["Barbès–Rochechouart", 6], ["Stalingrad", 5], ["Belleville", 5], ["Père Lachaise", 1.5],
    ["Philippe Auguste", 4], ["Nation", 0]
  ]},
  { line: "3", stations: [
    ["Saint-Lazare", 2], ["Havre–Caumartin", 1.5], ["Opéra", 7], ["République", 5], ["Père Lachaise", 1.5],
    ["Gambetta", 0]
  ]},
  { line: "4", stations: [
    ["Gare du Nord", 2], ["Gare de l'Est", 5], ["Strasbourg–Saint-Denis", 3], ["Les Halles", 1.5], ["Châtelet", 1.5],
    ["Cité", 1.5], ["Saint-Michel–Notre-Dame", 1.5], ["Odéon", 1.5], ["Saint-Germain-des-Prés", 1.5],
    ["Saint-Sulpice", 3], ["Montparnasse–Bienvenüe", 4], ["Denfert-Rochereau", 0]
  ]},
  { line: "5", stations: [
    ["Gare du Nord", 1.5], ["Gare de l'Est", 1.5], ["Jacques Bonsergent", 1.5], ["République", 5], ["Bastille", 3],
    ["Gare d'Austerlitz", 0]
  ]},
  { line: "6", stations: [
    ["Charles de Gaulle–Étoile", 4], ["Trocadéro", 4], ["Bir-Hakeim", 3], ["La Motte-Picquet–Grenelle", 6],
    ["Montparnasse–Bienvenüe", 1.5], ["Edgar Quinet", 3], ["Denfert-Rochereau", 8], ["Place d'Italie", 12], ["Nation", 0]
  ]},
  { line: "7", stations: [
    ["Gare de l'Est", 4], ["Chaussée d'Antin–La Fayette", 1.5], ["Opéra", 2], ["Pyramides", 1.5], ["Palais Royal–Musée du Louvre", 2], ["Pont Neuf", 1.5],
    ["Châtelet", 2], ["Pont Marie", 4], ["Jussieu", 2], ["Place Monge", 3], ["Place d'Italie", 0]
  ]},
  { line: "8", stations: [
    ["École Militaire", 2], ["La Tour-Maubourg", 1.5], ["Invalides", 2], ["Concorde", 1.5], ["Madeleine", 1.5],
    ["Opéra", 7], ["Strasbourg–Saint-Denis", 2], ["République", 4], ["Chemin Vert", 1.5], ["Bastille", 0]
  ]},
  { line: "9", stations: [
    ["Trocadéro", 2], ["Iéna", 1.5], ["Alma-Marceau", 2], ["Franklin D. Roosevelt", 6], ["Havre–Caumartin", 1.5],
    ["Chaussée d'Antin–La Fayette", 8], ["République", 0]
  ]},
  { line: "10", stations: [
    ["Sèvres-Babylone", 3], ["Odéon", 2], ["Cluny–La Sorbonne", 1.5], ["Maubert–Mutualité", 1.5],
    ["Cardinal Lemoine", 1.5], ["Jussieu", 0]
  ]},
  { line: "11", stations: [
    ["Châtelet", 1.5], ["Hôtel de Ville", 1.5], ["Rambuteau", 4], ["République", 0]
  ]},
  { line: "12", stations: [
    ["Abbesses", 1.5], ["Pigalle", 6], ["Saint-Lazare", 2], ["Madeleine", 1.5], ["Concorde", 2],
    ["Assemblée Nationale", 1.5], ["Solférino", 2], ["Rue du Bac", 1.5], ["Sèvres-Babylone", 4],
    ["Montparnasse–Bienvenüe", 0]
  ]},
  { line: "13", stations: [
    ["Saint-Lazare", 4], ["Champs-Élysées–Clemenceau", 2], ["Invalides", 1.5], ["Varenne", 1.5],
    ["Saint-François-Xavier", 3], ["Montparnasse–Bienvenüe", 0]
  ]},
  { line: "14", stations: [
    ["Saint-Lazare", 1.5], ["Madeleine", 2], ["Pyramides", 2], ["Châtelet", 3], ["Gare de Lyon", 18], ["Aéroport d'Orly", 0]
  ]},
  { line: "RER A", stations: [
    ["La Défense", 4], ["Charles de Gaulle–Étoile", 3], ["Auber", 3], ["Châtelet", 2], ["Gare de Lyon", 3], ["Nation", 0]
  ]},
  { line: "RER B", stations: [
    ["Aéroport Charles de Gaulle", 30], ["Gare du Nord", 4], ["Châtelet", 2], ["Saint-Michel–Notre-Dame", 2],
    ["Luxembourg", 3], ["Denfert-Rochereau", 0]
  ]},
  { line: "RER C", stations: [
    ["Versailles Château Rive Gauche", 32], ["Champ de Mars–Tour Eiffel", 2], ["Pont de l'Alma", 2], ["Invalides", 2],
    ["Musée d'Orsay", 2], ["Saint-Michel–Notre-Dame", 3], ["Gare d'Austerlitz", 0]
  ]}
];

/* Stationer som ligger så nära varandra att de fungerar som gångbyte */
PARIS.WALK_LINKS = [
  ["Bir-Hakeim", "Champ de Mars–Tour Eiffel", 5],
  ["Saint-Michel–Notre-Dame", "Cluny–La Sorbonne", 4],
  ["Opéra", "Auber", 5],
  ["Havre–Caumartin", "Auber", 3],
  ["Chaussée d'Antin–La Fayette", "Opéra", 6]
];

/* Bytestider i minuter (standard 4, långa byten uppräknade) */
PARIS.TRANSFER_TIME = { default: 4, "Châtelet": 7, "Montparnasse–Bienvenüe": 6, "Saint-Lazare": 5, "République": 5, "Gare du Nord": 5 };

PARIS.WAIT_TIME = { metro: 3, rer: 6 };

(function () {
  const N = PARIS.NETWORK;
  const nodes = new Map(); // key "station|line" -> { station, line }
  const adj = new Map();   // key -> [{ to, min, kind }]

  const key = (s, l) => s + "|" + l;
  const addNode = (s, l) => { const k = key(s, l); if (!nodes.has(k)) { nodes.set(k, { station: s, line: l }); adj.set(k, []); } return k; };
  const addEdge = (a, b, min, kind) => { adj.get(a).push({ to: b, min, kind }); adj.get(b).push({ to: a, min, kind }); };

  const byStation = new Map();
  N.forEach(({ line, stations }) => {
    for (let i = 0; i < stations.length; i++) {
      const [s, t] = stations[i];
      const k = addNode(s, line);
      if (!byStation.has(s)) byStation.set(s, []);
      byStation.get(s).push(k);
      if (i < stations.length - 1) addEdge(k, addNode(stations[i + 1][0], line), t, "ride");
    }
  });
  // byten inom station
  byStation.forEach((ks, s) => {
    const t = PARIS.TRANSFER_TIME[s] || PARIS.TRANSFER_TIME.default;
    for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) addEdge(ks[i], ks[j], t, "transfer");
  });
  // gångbyten
  PARIS.WALK_LINKS.forEach(([a, b, t]) => {
    (byStation.get(a) || []).forEach(ka => (byStation.get(b) || []).forEach(kb => addEdge(ka, kb, t, "transfer")));
  });

  PARIS.stationExists = s => byStation.has(s);
  PARIS.stationLines = s => (byStation.get(s) || []).map(k => nodes.get(k).line);

  function dijkstra(sources, targets) {
    // sources/targets: Map key -> extra minutes (gång till/från station)
    const dist = new Map(), prev = new Map();
    const pq = [];
    sources.forEach((w, k) => { dist.set(k, w); pq.push([w, k]); });
    const targetSet = new Set(targets.keys());
    while (pq.length) {
      pq.sort((a, b) => a[0] - b[0]);
      const [d, k] = pq.shift();
      if (d > dist.get(k)) continue;
      for (const e of adj.get(k)) {
        const nd = d + e.min;
        if (nd < (dist.has(e.to) ? dist.get(e.to) : Infinity)) {
          dist.set(e.to, nd); prev.set(e.to, { from: k, kind: e.kind }); pq.push([nd, e.to]);
        }
      }
    }
    let best = null;
    targetSet.forEach(k => {
      if (!dist.has(k)) return;
      const total = dist.get(k) + targets.get(k);
      if (!best || total < best.total) best = { total, end: k };
    });
    if (!best) return null;
    const path = [];
    let cur = best.end;
    while (cur) { path.unshift(cur); const p = prev.get(cur); cur = p ? p.from : null; }
    return { path, total: best.total, start: path[0], end: best.end };
  }

  /* Bygg en läsbar resplan mellan två attraktioner */
  PARIS.transitRoute = function (from, to) {
    const sources = new Map(), targets = new Map();
    from.metro.forEach(m => m.lines.forEach(l => { if (nodes.has(key(m.station, l))) sources.set(key(m.station, l), m.walk); }));
    to.metro.forEach(m => m.lines.forEach(l => { if (nodes.has(key(m.station, l))) targets.set(key(m.station, l), m.walk); }));
    if (!sources.size || !targets.size) return null;
    const r = dijkstra(sources, targets);
    if (!r) return null;

    const legs = [];
    const walkStart = sources.get(r.start);
    const walkEnd = targets.get(r.end);
    let i = 0;
    while (i < r.path.length - 1) {
      const a = nodes.get(r.path[i]);
      const b = nodes.get(r.path[i + 1]);
      if (a.line === b.line) {
        // åk längs linjen tills byte
        let j = i + 1, min = 0, hops = 0;
        min += edgeMin(r.path[i], r.path[i + 1]); hops++;
        while (j < r.path.length - 1 && nodes.get(r.path[j + 1]).line === a.line) {
          min += edgeMin(r.path[j], r.path[j + 1]); hops++; j++;
        }
        const wait = /RER/.test(a.line) ? PARIS.WAIT_TIME.rer : PARIS.WAIT_TIME.metro;
        legs.push({ type: "ride", line: a.line, from: a.station, to: nodes.get(r.path[j]).station, min: Math.round(min), wait });
        i = j;
      } else {
        // byte
        const t = edgeMin(r.path[i], r.path[i + 1]);
        if (a.station !== b.station) legs.push({ type: "transfer", from: a.station, to: b.station, min: t });
        else legs.push({ type: "transfer", from: a.station, to: b.station, min: t });
        i++;
      }
    }
    // rensa: om ingen ride-leg -> ingen mening med transit
    const rides = legs.filter(l => l.type === "ride");
    if (!rides.length) return null;
    // ta bort byten i början/slutet (byte utan åk före)
    while (legs.length && legs[0].type === "transfer") legs.shift();
    while (legs.length && legs[legs.length - 1].type === "transfer") legs.pop();

    const ride = legs.reduce((s, l) => s + l.min + (l.wait || 0), 0);
    const total = Math.round(walkStart + ride + walkEnd);
    return { legs, walkStart, walkEnd, total, startStation: nodes.get(r.start).station, endStation: nodes.get(r.end).station, changes: rides.length - 1 };
  };

  function edgeMin(a, b) {
    const e = adj.get(a).find(x => x.to === b);
    return e ? e.min : 0;
  }
})();
