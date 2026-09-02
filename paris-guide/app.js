/* Paris-guiden – applikationslogik */
(function () {
  "use strict";
  const A = PARIS.ATTRACTIONS;
  const byId = Object.fromEntries(A.map(a => [a.id, a]));
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Lagring ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignoreras */ } }
  };

  /* ---------- Geometri ---------- */
  const WALK_MIN_PER_KM = 15.5; // 4,8 km/h med omvägsfaktor 1,25
  function haversine(a, b) {
    const R = 6371, toR = d => d * Math.PI / 180;
    const dLat = toR(b.lat - a.lat), dLng = toR(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a.lat)) * Math.cos(toR(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  const walkMin = km => Math.max(2, Math.round(km * WALK_MIN_PER_KM));
  const fmtKm = km => km < 1 ? Math.round(km * 100) * 10 + " m" : (Math.round(km * 10) / 10).toLocaleString("sv-SE") + " km";
  const fmtMin = m => m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? " " + (m % 60) + " min" : ""}` : `${m} min`;
  const fmtEur = n => n === 0 ? "Gratis" : n.toLocaleString("sv-SE", { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + " €";

  /* Bästa förbindelse mellan två attraktioner */
  function connection(from, to) {
    const km = haversine(from, to);
    const walk = walkMin(km);
    const transit = PARIS.transitRoute(from, to);
    let mode = "walk";
    if (transit && walk > 22 && transit.total < walk - 3) mode = "transit";
    if (km > 6 && transit) mode = "transit";
    const total = mode === "walk" ? walk : transit.total;
    return { km, walk, transit, mode, total };
  }

  /* ---------- Bilder ---------- */
  const IMG_CACHE_KEY = "img.v1";
  const imgCache = store.get(IMG_CACHE_KEY, {});
  function placeholderSVG(a) {
    const c = PARIS.CATEGORIES[a.category].color;
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c}'/><stop offset='1' stop-color='#1b3a6b'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/><g fill='none' stroke='rgba(255,255,255,.18)' stroke-width='3'><circle cx='640' cy='140' r='160'/><circle cx='640' cy='140' r='110'/><path d='M0 520 Q200 440 400 520 T800 520'/><path d='M0 470 Q200 390 400 470 T800 470'/></g></svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  function commonsPageFromUrl(url) {
    try {
      const parts = decodeURIComponent(new URL(url).pathname).split("/");
      let name = parts[parts.length - 1];
      if (/^\d+px-/.test(name)) name = parts[parts.length - 2];
      return "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(name);
    } catch { return "https://commons.wikimedia.org/"; }
  }
  async function resolveImage(a) {
    if (imgCache[a.id]) return imgCache[a.id];
    let result = null;
    try {
      const r = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(a.wiki), { headers: { Accept: "application/json" } });
      if (r.ok) {
        const j = await r.json();
        const src = j.thumbnail && j.thumbnail.source;
        if (src && !/\.svg/i.test(src)) {
          result = { src: src.replace(/\/\d+px-/, "/1200px-"), page: commonsPageFromUrl(j.originalimage ? j.originalimage.source : src) };
        }
      }
    } catch { /* offline eller blockerat */ }
    if (!result && PARIS.IMAGE_HINTS[a.id]) {
      const f = PARIS.IMAGE_HINTS[a.id];
      result = { src: "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(f) + "?width=1200", page: "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(f) };
    }
    if (result) { imgCache[a.id] = result; store.set(IMG_CACHE_KEY, imgCache); }
    return result;
  }
  function attachImage(img, a, creditEl) {
    img.src = placeholderSVG(a);
    img.alt = a.name;
    resolveImage(a).then(res => {
      if (!res) return;
      const probe = new Image();
      probe.onload = () => { img.src = res.src; img.classList.add("is-photo"); if (creditEl) { creditEl.hidden = false; creditEl.href = res.page; } };
      probe.onerror = () => { delete imgCache[a.id]; store.set(IMG_CACHE_KEY, imgCache); };
      probe.src = res.src;
    });
  }

  /* ---------- Plaque (gatuskylt) ---------- */
  function plaque(a, opts = {}) {
    const arr = a.arr ? `${a.arr}<sup>${a.arr === 1 ? "er" : "e"}</sup> Arr<sup>t</sup>` : "Yvelines";
    return `<div class="plaque ${opts.size ? "plaque--" + opts.size : ""}"><span class="plaque__arr">${arr}</span><span class="plaque__name">${esc(a.name)}</span>${opts.sub ? `<span class="plaque__sub">${esc(opts.sub)}</span>` : ""}</div>`;
  }
  function lineBadges(lines) {
    return lines.map(l => `<span class="line" style="background:${PARIS.LINE_COLORS[l] || "#888"};color:${textOn(PARIS.LINE_COLORS[l] || "#888")}" title="${/RER/.test(l) ? l : "Linje " + l}">${l.replace("RER ", "")}${/RER/.test(l) ? "<small>RER</small>" : ""}</span>`).join("");
  }
  function textOn(hex) {
    const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#111" : "#fff";
  }

  /* ---------- Tillstånd ---------- */
  const state = {
    tab: "explore",
    cat: "all",
    q: "",
    sort: store.get("sort", "name"),
    userPos: null,
    plan: store.get("plan", []),
    planStart: store.get("planStart", "09:00"),
    map: null, markers: {}, routeLayer: null, userMarker: null
  };

  /* ---------- Flikar ---------- */
  function showTab(name, push = true) {
    state.tab = name;
    $$(".tab").forEach(t => { const on = t.dataset.tab === name; t.classList.toggle("is-active", on); t.setAttribute("aria-selected", on); });
    $$(".panel").forEach(p => p.classList.toggle("is-active", p.id === "tab-" + name));
    if (name === "map") { initMap(); setTimeout(() => state.map.invalidateSize(), 50); }
    if (name === "plan") renderPlan();
    if (push && location.hash !== "#" + name && !/^#(p|plan)=/.test(location.hash)) history.replaceState(null, "", "#" + name);
    window.scrollTo({ top: 0 });
  }
  $$(".tab").forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));

  /* ---------- Utforska ---------- */
  function renderChips() {
    const cats = [["all", "Alla"], ...Object.entries(PARIS.CATEGORIES).map(([k, v]) => [k, v.label])];
    $("#catChips").innerHTML = cats.map(([k, l]) => `<button class="chip ${state.cat === k ? "is-on" : ""}" data-cat="${k}" ${k !== "all" ? `style="--c:${PARIS.CATEGORIES[k].color}"` : ""}>${l}</button>`).join("");
    $$("#catChips .chip").forEach(c => c.addEventListener("click", () => { state.cat = c.dataset.cat; renderChips(); renderGrid(); }));
  }
  function filtered() {
    const q = state.q.trim().toLowerCase();
    let list = A.filter(a => (state.cat === "all" || a.category === state.cat) && (!q || [a.name, a.french, a.tagline, ...a.highlights].join(" ").toLowerCase().includes(q)));
    if (state.sort === "near" && state.userPos) list.sort((a, b) => haversine(state.userPos, a) - haversine(state.userPos, b));
    else if (state.sort === "arr") list.sort((a, b) => (a.arr || 99) - (b.arr || 99) || a.name.localeCompare(b.name, "sv"));
    else if (state.sort === "time") list.sort((a, b) => a.duration - b.duration);
    else list.sort((a, b) => a.name.localeCompare(b.name, "sv"));
    return list;
  }
  function renderGrid() {
    const list = filtered();
    const grid = $("#cardGrid");
    $("#resultCount").textContent = list.length === A.length ? `${A.length} platser` : `${list.length} av ${A.length} platser`;
    if (!list.length) { grid.innerHTML = `<p class="empty">Inget matchar sökningen. Prova ett annat ord eller rensa filtret.</p>`; return; }
    grid.innerHTML = list.map(a => {
      const inPlan = state.plan.includes(a.id);
      const dist = state.userPos ? `<span class="card__dist">${fmtKm(haversine(state.userPos, a))} från dig</span>` : "";
      return `<article class="card" data-id="${a.id}">
        <button class="card__media" data-open="${a.id}" aria-label="Öppna ${esc(a.name)}">
          <img loading="lazy" decoding="async">
          ${a.closed ? `<span class="card__flag">Stängt för renovering</span>` : ""}
          ${plaque(a)}
        </button>
        <div class="card__body">
          <p class="card__tag">${esc(a.tagline)}</p>
          <div class="card__meta">
            <span class="cat" style="--c:${PARIS.CATEGORIES[a.category].color}">${PARIS.CATEGORIES[a.category].label}</span>
            <span>${fmtMin(a.duration)}</span>
            <span>${a.priceNum === 0 ? "Gratis" : "från " + fmtEur(a.priceNum)}</span>
            ${dist}
          </div>
          <div class="card__lines">${lineBadges([...new Set(a.metro.flatMap(m => m.lines))])}</div>
          <div class="card__actions">
            <button class="btn btn--ghost" data-open="${a.id}">Läs mer</button>
            <button class="btn ${inPlan ? "btn--on" : ""}" data-plan="${a.id}">${inPlan ? "I planen" : "Lägg till i plan"}</button>
          </div>
        </div>
      </article>`;
    }).join("");
    $$("#cardGrid .card").forEach(card => {
      const a = byId[card.dataset.id];
      attachImage($("img", card), a);
    });
  }
  $("#search").addEventListener("input", e => { state.q = e.target.value; renderGrid(); });
  $("#sort").value = state.sort;
  $("#sort").addEventListener("change", e => { state.sort = e.target.value; store.set("sort", state.sort); if (state.sort === "near" && !state.userPos) locate(() => renderGrid()); else renderGrid(); });
  $("#nearBtn").addEventListener("click", () => locate(() => { state.sort = "near"; $("#sort").value = "near"; store.set("sort", "near"); renderGrid(); }));

  function locate(cb) {
    if (!navigator.geolocation) { toast("Din webbläsare saknar platstjänst."); return; }
    toast("Hämtar din position…");
    navigator.geolocation.getCurrentPosition(p => {
      state.userPos = { lat: p.coords.latitude, lng: p.coords.longitude };
      const inParis = haversine(state.userPos, { lat: 48.8566, lng: 2.3522 }) < 40;
      toast(inParis ? "Position hittad." : "Du verkar inte vara i Paris – avstånden räknas ändå från din position.");
      if (state.map) showUserOnMap();
      cb && cb();
    }, () => toast("Kunde inte hämta position. Tillåt platsåtkomst i webbläsaren."), { timeout: 10000, maximumAge: 60000 });
  }

  function renderItineraries() {
    $("#itineraries").innerHTML = PARIS.ITINERARIES.map(it => {
      const stops = it.ids.map(id => byId[id]);
      const totalVisit = stops.reduce((s, a) => s + a.duration, 0);
      let travel = 0; for (let i = 0; i < stops.length - 1; i++) travel += connection(stops[i], stops[i + 1]).total;
      const cost = stops.reduce((s, a) => s + a.priceNum, 0);
      return `<article class="route">
        <div class="route__head"><h3>${esc(it.name)}</h3><span class="route__days">${it.days === 1 ? "1 dag" : it.days + " dagar"}</span></div>
        <p>${esc(it.desc)}</p>
        <ol class="route__stops">${stops.map(a => `<li><button class="link" data-open="${a.id}">${esc(a.name)}</button></li>`).join("")}</ol>
        <dl class="route__facts"><div><dt>Besökstid</dt><dd>${fmtMin(totalVisit)}</dd></div><div><dt>Resor</dt><dd>${fmtMin(travel)}</dd></div><div><dt>Inträden</dt><dd>${fmtEur(cost)}</dd></div></dl>
        <button class="btn" data-itinerary="${it.id}">Öppna i planeraren</button>
      </article>`;
    }).join("");
  }

  /* ---------- Detaljvy ---------- */
  const sheet = $("#sheet");
  function openDetail(id) {
    const a = byId[id]; if (!a) return;
    const near = A.filter(x => x.id !== a.id).map(x => ({ x, c: connection(a, x) })).sort((p, q) => p.c.km - q.c.km).slice(0, 6);
    const inPlan = state.plan.includes(a.id);
    $("#sheetBody").innerHTML = `
      <div class="detail__media"><img alt=""><a class="credit" target="_blank" rel="noopener" hidden>Bild: Wikimedia Commons</a>${a.closed ? `<span class="card__flag">Stängt för renovering</span>` : ""}</div>
      <div class="detail__head">
        ${plaque(a, { size: "lg", sub: a.french })}
        <p class="detail__tag">${esc(a.tagline)}</p>
        <div class="detail__actions">
          <button class="btn ${inPlan ? "btn--on" : ""}" data-plan="${a.id}">${inPlan ? "Finns i din plan" : "Lägg till i dagsplan"}</button>
          <button class="btn btn--ghost" data-map="${a.id}">Visa på kartan</button>
          <a class="btn btn--ghost" href="${a.booking}" target="_blank" rel="noopener">Officiell webbplats</a>
        </div>
      </div>
      ${a.closed ? `<div class="notice">${esc(a.closed)}</div>` : ""}
      <div class="detail__grid">
        <section class="detail__history">
          <h3>Historia</h3>
          ${a.history.map(p => `<p>${esc(p)}</p>`).join("")}
          <h3>Missa inte</h3>
          <ul class="ticks">${a.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
          <p class="more"><a href="https://sv.wikipedia.org/wiki/${encodeURIComponent(a.svwiki)}" target="_blank" rel="noopener">Läs mer på svenska Wikipedia</a></p>
        </section>
        <aside class="detail__facts">
          <h3>Praktiskt</h3>
          <dl class="facts">
            <div><dt>Öppet</dt><dd>${esc(a.hours)}</dd></div>
            <div><dt>Pris</dt><dd>${esc(a.price)}${a.museumPass ? `<span class="pass">Ingår i Paris Museum Pass</span>` : ""}</dd></div>
            <div><dt>Räkna med</dt><dd>${fmtMin(a.duration)}</dd></div>
            <div><dt>Bästa tid</dt><dd>${esc(a.bestTime)}</dd></div>
            <div><dt>Metro & RER</dt><dd class="stations">${a.metro.map(m => `<span class="station">${lineBadges(m.lines)}<span>${esc(m.station)}<small>${m.walk} min gång</small></span></span>`).join("")}</dd></div>
          </dl>
          <h3>Tips</h3>
          <ul class="tips">${a.tips.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
          <p class="small">Priser och tider avser 2025/2026 och kan ändras – kontrollera alltid på den officiella webbplatsen.</p>
        </aside>
      </div>
      <section class="nearby">
        <h3>Härifrån till…</h3>
        <ul class="nearby__list">${near.map(({ x, c }) => `
          <li>
            <button class="link nearby__name" data-open="${x.id}">${esc(x.name)}</button>
            <span class="nearby__km">${fmtKm(c.km)}</span>
            <span class="nearby__mode">${c.mode === "walk" ? `Gå ${c.walk} min` : `Metro ca ${c.transit.total} min`}</span>
            <button class="btn btn--sm" data-route="${a.id}|${x.id}">Vägbeskrivning</button>
          </li>`).join("")}</ul>
      </section>`;
    attachImage($(".detail__media img", sheet), a, $(".detail__media .credit", sheet));
    if (!sheet.open) sheet.showModal();
    sheet.scrollTop = 0;
    history.replaceState(null, "", "#p=" + a.id);
  }
  $("#sheetClose").addEventListener("click", () => sheet.close());
  sheet.addEventListener("close", () => { if (/^#p=/.test(location.hash)) history.replaceState(null, "", "#" + state.tab); });
  sheet.addEventListener("click", e => { if (e.target === sheet) sheet.close(); });

  /* ---------- Vägbeskrivning ---------- */
  const routeDlg = $("#routeDlg");
  function legHTML(c, from, to) {
    const t = c.transit;
    const walkBlock = `<div class="opt ${c.mode === "walk" ? "is-best" : ""}"><div class="opt__head"><span class="opt__title">Till fots</span><span class="opt__time">${c.walk} min</span></div><p>${fmtKm(c.km)} fågelvägen. Räknat med omvägar i gatunätet, cirka ${fmtKm(c.km * 1.25)}.</p></div>`;
    let transitBlock = `<div class="opt"><div class="opt__head"><span class="opt__title">Metro / RER</span><span class="opt__time">–</span></div><p>Ingen rimlig förbindelse i det förenklade nätet – gå eller ta buss.</p></div>`;
    if (t) {
      transitBlock = `<div class="opt ${c.mode === "transit" ? "is-best" : ""}"><div class="opt__head"><span class="opt__title">Metro / RER</span><span class="opt__time">ca ${t.total} min</span></div>
        <ol class="legs">
          <li class="leg leg--walk"><span class="leg__icon">🚶</span><span>Gå ${t.walkStart} min till <b>${esc(t.startStation)}</b></span></li>
          ${t.legs.map(l => l.type === "ride"
            ? `<li class="leg"><span class="leg__icon">${lineBadges([l.line])}</span><span>${/RER/.test(l.line) ? l.line : "Linje " + l.line} från <b>${esc(l.from)}</b> till <b>${esc(l.to)}</b><small>ca ${l.min} min åktid, väntetid ca ${l.wait} min</small></span></li>`
            : `<li class="leg leg--walk"><span class="leg__icon">↔</span><span>Byte${l.from !== l.to ? ` – gå till ${esc(l.to)}` : ""}<small>ca ${l.min} min</small></span></li>`).join("")}
          <li class="leg leg--walk"><span class="leg__icon">🚶</span><span>Gå ${t.walkEnd} min till <b>${esc(to.name)}</b></span></li>
        </ol>
        <p class="small">${t.changes === 0 ? "Inga byten." : t.changes === 1 ? "Ett byte." : t.changes + " byten."} En biljett (2,50 €) gäller hela resan inklusive byten.</p></div>`;
    }
    return walkBlock + transitBlock;
  }
  function openRoute(fromId, toId) {
    const from = byId[fromId], to = byId[toId];
    const c = connection(from, to);
    $("#routeBody").innerHTML = `
      <div class="route-title"><div>${plaque(from)}</div><span class="route-arrow" aria-hidden="true">→</span><div>${plaque(to)}</div></div>
      <p class="route-summary">Rekommendation: <b>${c.mode === "walk" ? `gå, ${c.walk} minuter` : `metro, cirka ${c.transit.total} minuter`}</b>.</p>
      ${legHTML(c, from, to)}
      <p class="small">Restiderna är uppskattningar från ett förenklat nät med nyckelstationer och gäller dagtid utan störningar. Kontrollera alltid i appen Bonjour RATP eller Citymapper.</p>`;
    routeDlg.showModal();
  }
  $("#routeClose").addEventListener("click", () => routeDlg.close());
  routeDlg.addEventListener("click", e => { if (e.target === routeDlg) routeDlg.close(); });

  /* ---------- Karta ---------- */
  function initMap() {
    if (state.map) return;
    const map = L.map("map", { zoomControl: false, attributionControl: true }).setView([48.8589, 2.3300], 12);
    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 19, subdomains: "abcd",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-bidragsgivare &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);
    state.map = map;
    A.forEach(a => {
      const c = PARIS.CATEGORIES[a.category].color;
      const icon = L.divIcon({ className: "pin-wrap", html: `<span class="pin" style="--c:${c}"><i></i></span><span class="pin__label">${esc(a.name)}</span>`, iconSize: [26, 34], iconAnchor: [13, 34], popupAnchor: [0, -30] });
      const m = L.marker([a.lat, a.lng], { icon, title: a.name, keyboard: true }).addTo(map);
      m.bindPopup(() => `<div class="popup">${plaque(a)}<p>${esc(a.tagline)}</p><div class="popup__meta">${fmtMin(a.duration)} · ${a.priceNum === 0 ? "Gratis" : "från " + fmtEur(a.priceNum)}</div><div class="popup__lines">${lineBadges([...new Set(a.metro.flatMap(x => x.lines))])}</div><div class="popup__actions"><button class="btn btn--sm" data-open="${a.id}">Läs mer</button><button class="btn btn--sm btn--ghost" data-plan="${a.id}">${state.plan.includes(a.id) ? "I planen" : "Lägg till"}</button></div></div>`, { maxWidth: 280 });
      state.markers[a.id] = m;
    });
    $("#mapLegend").innerHTML = Object.entries(PARIS.CATEGORIES).map(([k, v]) => `<span><i style="background:${v.color}"></i>${v.label}</span>`).join("");
    $("#mapPlanToggle").addEventListener("change", drawPlanRoute);
    $("#mapLocate").addEventListener("click", () => locate(() => map.setView([state.userPos.lat, state.userPos.lng], 14)));
    $("#mapFit").addEventListener("click", () => map.fitBounds(L.latLngBounds(A.filter(a => a.id !== "versailles").map(a => [a.lat, a.lng])).pad(0.05)));
    map.fitBounds(L.latLngBounds(A.filter(a => a.id !== "versailles").map(a => [a.lat, a.lng])).pad(0.05));
    drawPlanRoute();
    if (state.userPos) showUserOnMap();
  }
  function showUserOnMap() {
    if (state.userMarker) state.userMarker.remove();
    state.userMarker = L.circleMarker([state.userPos.lat, state.userPos.lng], { radius: 8, color: "#fff", weight: 3, fillColor: "#1e88e5", fillOpacity: 1 }).addTo(state.map).bindTooltip("Du är här");
  }
  function drawPlanRoute() {
    if (!state.map) return;
    if (state.routeLayer) { state.routeLayer.remove(); state.routeLayer = null; }
    if (!$("#mapPlanToggle").checked || state.plan.length < 2) return;
    const pts = state.plan.map(id => [byId[id].lat, byId[id].lng]);
    const group = L.layerGroup();
    L.polyline(pts, { color: "#1b3a6b", weight: 5, opacity: .35 }).addTo(group);
    L.polyline(pts, { color: "#2e6b4f", weight: 3, dashArray: "8 8" }).addTo(group);
    state.plan.forEach((id, i) => L.marker([byId[id].lat, byId[id].lng], { icon: L.divIcon({ className: "stop-no", html: `<span>${i + 1}</span>`, iconSize: [22, 22], iconAnchor: [11, 40] }), interactive: false }).addTo(group));
    group.addTo(state.map);
    state.routeLayer = group;
  }
  function focusOnMap(id) {
    showTab("map");
    setTimeout(() => { state.map.setView([byId[id].lat, byId[id].lng], 15); state.markers[id].openPopup(); }, 120);
  }

  /* ---------- Planerare ---------- */
  function savePlan() { store.set("plan", state.plan); store.set("planStart", state.planStart); updatePlanCount(); }
  function updatePlanCount() { const n = state.plan.length; const el = $("#planCount"); el.hidden = !n; el.textContent = n; }
  function togglePlan(id) {
    const i = state.plan.indexOf(id);
    if (i >= 0) { state.plan.splice(i, 1); toast(`${byId[id].name} borttagen ur planen.`); }
    else { state.plan.push(id); toast(`${byId[id].name} tillagd. ${state.plan.length} ${state.plan.length === 1 ? "plats" : "platser"} i planen.`); }
    savePlan(); renderGrid(); drawPlanRoute();
    if (sheet.open) { const b = $(`#sheet [data-plan="${id}"]`); if (b) { const on = state.plan.includes(id); b.classList.toggle("btn--on", on); b.textContent = on ? "Finns i din plan" : "Lägg till i dagsplan"; } }
    if (state.tab === "plan") renderPlan();
  }
  function optimizePlan() {
    if (state.plan.length < 3) return;
    const ids = [...state.plan];
    const cost = (a, b) => connection(byId[a], byId[b]).total;
    // närmaste granne från första stoppet
    const order = [ids.shift()];
    while (ids.length) { const last = order[order.length - 1]; ids.sort((a, b) => cost(last, a) - cost(last, b)); order.push(ids.shift()); }
    // 2-opt
    const tot = o => { let s = 0; for (let i = 0; i < o.length - 1; i++) s += cost(o[i], o[i + 1]); return s; };
    let improved = true;
    while (improved) {
      improved = false;
      for (let i = 1; i < order.length - 1; i++) for (let k = i + 1; k < order.length; k++) {
        const cand = order.slice(0, i).concat(order.slice(i, k + 1).reverse(), order.slice(k + 1));
        if (tot(cand) < tot(order) - 0.5) { order.splice(0, order.length, ...cand); improved = true; }
      }
    }
    state.plan = order; savePlan(); renderPlan(); drawPlanRoute();
    toast("Ordningen är optimerad efter kortast restid.");
  }
  function planSummary() {
    const stops = state.plan.map(id => byId[id]);
    let visit = 0, travel = 0, walkKm = 0, cost = 0, passCost = 0;
    const legs = [];
    stops.forEach((a, i) => {
      visit += a.duration; cost += a.priceNum; if (a.museumPass) passCost += a.priceNum;
      if (i < stops.length - 1) { const c = connection(a, stops[i + 1]); legs.push(c); travel += c.total; if (c.mode === "walk") walkKm += c.km * 1.25; else walkKm += (c.transit.walkStart + c.transit.walkEnd) / WALK_MIN_PER_KM; }
    });
    return { stops, visit, travel, walkKm, cost, passCost, legs, total: visit + travel };
  }
  function timeAt(startHHMM, plusMin) {
    const [h, m] = startHHMM.split(":").map(Number);
    const t = h * 60 + m + plusMin;
    return `${String(Math.floor(t / 60) % 24).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
  }
  function renderPlan() {
    const wrap = $("#planBody");
    $("#planStart").value = state.planStart;
    const addable = A.filter(a => !state.plan.includes(a.id));
    $("#planAdd").innerHTML = addable.map(a => `<button class="chip" data-plan="${a.id}" style="--c:${PARIS.CATEGORIES[a.category].color}">+ ${esc(a.name)}</button>`).join("");
    if (!state.plan.length) {
      wrap.innerHTML = `<div class="empty-plan"><p>Din plan är tom. Lägg till platser här nedanför, från Utforska eller välj en färdig rutt.</p><div class="presets">${PARIS.ITINERARIES.map(it => `<button class="btn btn--ghost" data-itinerary="${it.id}">${esc(it.name)}</button>`).join("")}</div></div>`;
      $("#planSummary").hidden = true; return;
    }
    const s = planSummary();
    let clock = 0;
    const items = [];
    s.stops.forEach((a, i) => {
      items.push(`<li class="stop">
        <div class="stop__time">${timeAt(state.planStart, clock)}</div>
        <div class="stop__no">${i + 1}</div>
        <div class="stop__card">
          <button class="stop__name" data-open="${a.id}">${esc(a.name)}</button>
          <div class="stop__meta">${fmtMin(a.duration)} på plats · ${a.priceNum === 0 ? "gratis" : fmtEur(a.priceNum)}${a.closed ? ` · <b>stängt för renovering</b>` : ""}</div>
          <div class="stop__ctrl">
            <button class="icon-btn" data-move="${i}|-1" aria-label="Flytta upp" ${i === 0 ? "disabled" : ""}>↑</button>
            <button class="icon-btn" data-move="${i}|1" aria-label="Flytta ned" ${i === s.stops.length - 1 ? "disabled" : ""}>↓</button>
            <button class="icon-btn" data-plan="${a.id}" aria-label="Ta bort">✕</button>
          </div>
        </div>
      </li>`);
      clock += a.duration;
      if (i < s.stops.length - 1) {
        const c = s.legs[i]; const nxt = s.stops[i + 1];
        const t = c.transit;
        const desc = c.mode === "walk"
          ? `Gå ${c.walk} min (${fmtKm(c.km * 1.25)})`
          : `${t.legs.filter(l => l.type === "ride").map(l => `<span class="inline-line">${lineBadges([l.line])}</span> ${esc(l.from)} → ${esc(l.to)}`).join(", byt till ")} · ca ${t.total} min`;
        items.push(`<li class="leg-row"><span class="leg-row__time">${timeAt(state.planStart, clock)}</span><span class="leg-row__desc">${desc}</span><button class="link" data-route="${a.id}|${nxt.id}">Detaljer</button></li>`);
        clock += c.total;
      }
    });
    wrap.innerHTML = `<ol class="timeline">${items.join("")}</ol><p class="plan-end">Klart cirka <b>${timeAt(state.planStart, clock)}</b>${s.total > 600 ? ` – det är en lång dag. Överväg att dela upp på två dagar.` : ""}</p>`;

    // Sammanfattning & budget
    const pass = passSuggestion(s);
    $("#planSummary").hidden = false;
    $("#planSummary").innerHTML = `
      <div class="sum"><span>Total tid</span><b>${fmtMin(s.total)}</b><small>${fmtMin(s.visit)} på plats, ${fmtMin(s.travel)} resor</small></div>
      <div class="sum"><span>Till fots</span><b>${fmtKm(s.walkKm)}</b><small>inkl. gång till och från stationer</small></div>
      <div class="sum"><span>Inträden</span><b>${fmtEur(s.cost)}</b><small>per vuxen, ordinarie pris</small></div>
      <div class="sum"><span>Museum Pass</span><b>${pass.label}</b><small>${pass.note}</small></div>`;
  }
  function passSuggestion(s) {
    const covered = s.passCost;
    const passes = [[2, 70], [4, 90], [6, 110]];
    const bestOpt = passes.find(([d, p]) => covered > p);
    if (covered === 0) return { label: "Behövs inte", note: "Inget i planen ingår i passet." };
    if (!bestOpt) return { label: "Lönar sig inte", note: `Passet täcker ${fmtEur(covered)} av dina inträden – billigare att köpa separat (2 dagar kostar ca 70 €).` };
    return { label: `${bestOpt[0]} dagar, ${bestOpt[1]} €`, note: `Täcker ${fmtEur(covered)} i planen – spara ca ${fmtEur(Math.round(covered - bestOpt[1]))}. Kräver ändå tidsbokning på Louvren.` };
  }
  function planAsText() {
    const s = planSummary(); let clock = 0; const lines = [`Min dag i Paris – start ${state.planStart}`, ""];
    s.stops.forEach((a, i) => {
      lines.push(`${timeAt(state.planStart, clock)}  ${i + 1}. ${a.name} (${fmtMin(a.duration)}, ${a.priceNum === 0 ? "gratis" : fmtEur(a.priceNum)})`);
      lines.push(`       Metro: ${a.metro.map(m => `${m.station} (${m.lines.join(", ")})`).join("; ")}`);
      clock += a.duration;
      if (i < s.stops.length - 1) {
        const c = s.legs[i];
        lines.push(c.mode === "walk" ? `       → Gå ${c.walk} min` : `       → ${c.transit.legs.filter(l => l.type === "ride").map(l => `${/RER/.test(l.line) ? l.line : "Linje " + l.line} ${l.from}–${l.to}`).join(", byt: ")} (ca ${c.transit.total} min)`);
        clock += c.total;
      }
    });
    lines.push("", `Klart ca ${timeAt(state.planStart, clock)}. Inträden totalt ${fmtEur(s.cost)}.`, `Länk: ${shareURL()}`);
    return lines.join("\n");
  }
  function shareURL() { return location.origin + location.pathname + "#plan=" + state.plan.join(",") + "&start=" + state.planStart; }

  $("#planOptimize").addEventListener("click", optimizePlan);
  $("#planClear").addEventListener("click", () => { if (!state.plan.length) return; state.plan = []; savePlan(); renderPlan(); renderGrid(); drawPlanRoute(); toast("Planen är rensad."); });
  $("#planStart").addEventListener("change", e => { state.planStart = e.target.value || "09:00"; savePlan(); renderPlan(); });
  $("#planCopy").addEventListener("click", async () => { try { await navigator.clipboard.writeText(planAsText()); toast("Planen är kopierad som text."); } catch { toast("Kunde inte kopiera – markera texten manuellt."); } });
  $("#planShare").addEventListener("click", async () => {
    const url = shareURL();
    if (navigator.share) { try { await navigator.share({ title: "Min dag i Paris", url }); return; } catch { /* avbrutet */ } }
    try { await navigator.clipboard.writeText(url); toast("Länk kopierad – öppna den på valfri enhet."); } catch { prompt("Kopiera länken:", url); }
  });
  $("#planMap").addEventListener("click", () => { showTab("map"); $("#mapPlanToggle").checked = true; drawPlanRoute(); if (state.plan.length) setTimeout(() => state.map.fitBounds(L.latLngBounds(state.plan.map(id => [byId[id].lat, byId[id].lng])).pad(0.2)), 100); });

  function loadItinerary(id) {
    const it = PARIS.ITINERARIES.find(x => x.id === id); if (!it) return;
    state.plan = [...it.ids]; savePlan(); renderGrid(); drawPlanRoute(); showTab("plan");
    toast(`Rutten ”${it.name}” är laddad i planeraren.`);
  }

  /* ---------- Praktiskt ---------- */
  const ICONS = {
    ticket: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4Z M10 5v14",
    plane: "M2 16l20-8-6 8 2 5-4-2-4 3v-5Z",
    clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 3",
    shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6Z M9 12l2 2 4-4",
    euro: "M18 6a7 7 0 1 0 0 12 M4 10h10 M4 14h10",
    compass: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3-3-2 6-4 2 2-6Z"
  };
  function renderInfo() {
    $("#infoSections").innerHTML = PARIS.PRACTICAL.map((s, i) => `
      <details class="info" ${i === 0 ? "open" : ""}>
        <summary><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[s.icon]}"/></svg><span>${esc(s.title)}</span></summary>
        <ul>${s.items.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      </details>`).join("");
    $("#phrases").innerHTML = PARIS.PHRASES.map(p => `<tr><td>${esc(p.sv)}</td><td class="fr">${esc(p.fr)}</td><td class="say">${esc(p.say)}</td></tr>`).join("");
    // Metrolinjer
    $("#lineLegend").innerHTML = Object.entries(PARIS.LINE_COLORS).map(([l, c]) => `<span class="line" style="background:${c};color:${textOn(c)}">${l.replace("RER ", "")}${/RER/.test(l) ? "<small>RER</small>" : ""}</span>`).join("");
  }

  /* ---------- Väder & tid ---------- */
  const WMO = { 0: ["Klart", "☀"], 1: ["Mest klart", "🌤"], 2: ["Halvklart", "⛅"], 3: ["Mulet", "☁"], 45: ["Dimma", "🌫"], 48: ["Dimma", "🌫"], 51: ["Duggregn", "🌦"], 53: ["Duggregn", "🌦"], 55: ["Duggregn", "🌧"], 61: ["Lätt regn", "🌧"], 63: ["Regn", "🌧"], 65: ["Kraftigt regn", "🌧"], 71: ["Snö", "🌨"], 73: ["Snö", "🌨"], 75: ["Snö", "🌨"], 80: ["Regnskurar", "🌦"], 81: ["Regnskurar", "🌧"], 82: ["Kraftiga skurar", "🌧"], 95: ["Åska", "⛈" ], 96: ["Åska", "⛈"], 99: ["Åska", "⛈"] };
  const DAYS = ["sön", "mån", "tis", "ons", "tor", "fre", "lör"];
  async function loadWeather() {
    try {
      const r = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunset&timezone=Europe%2FParis&forecast_days=6");
      if (!r.ok) throw new Error();
      const j = await r.json();
      const cur = WMO[j.current.weather_code] || ["", ""];
      $("#weatherNow").innerHTML = `<span class="w__icon">${cur[1]}</span><span><b>${Math.round(j.current.temperature_2m)}°</b> ${cur[0].toLowerCase()}</span>`;
      $("#weatherNow").hidden = false;
      $("#forecast").innerHTML = j.daily.time.map((d, i) => {
        const w = WMO[j.daily.weather_code[i]] || ["", ""];
        return `<div class="fc"><span class="fc__day">${i === 0 ? "I dag" : DAYS[new Date(d).getDay()]}</span><span class="fc__icon">${w[1]}</span><span class="fc__t"><b>${Math.round(j.daily.temperature_2m_max[i])}°</b> ${Math.round(j.daily.temperature_2m_min[i])}°</span><span class="fc__p">${j.daily.precipitation_probability_max[i]}% regn</span><span class="fc__s">solnedgång ${j.daily.sunset[i].slice(11, 16)}</span></div>`;
      }).join("");
      $("#forecastWrap").hidden = false;
    } catch { /* offline – visa inget */ }
  }
  function tickClock() {
    const t = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit" }).format(new Date());
    $("#parisTime").textContent = t;
  }

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) { const el = $("#toast"); el.textContent = msg; el.hidden = false; el.classList.add("is-on"); clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.classList.remove("is-on"); setTimeout(() => el.hidden = true, 300); }, 2600); }

  /* ---------- Delegerade klick ---------- */
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-open],[data-plan],[data-route],[data-map],[data-itinerary],[data-move]");
    if (!t) return;
    if (t.dataset.open) { openDetail(t.dataset.open); }
    else if (t.dataset.plan) { togglePlan(t.dataset.plan); }
    else if (t.dataset.route) { const [a, b] = t.dataset.route.split("|"); openRoute(a, b); }
    else if (t.dataset.map) { sheet.close(); focusOnMap(t.dataset.map); }
    else if (t.dataset.itinerary) { loadItinerary(t.dataset.itinerary); }
    else if (t.dataset.move) { const [i, d] = t.dataset.move.split("|").map(Number); const j = i + d; if (j < 0 || j >= state.plan.length) return; [state.plan[i], state.plan[j]] = [state.plan[j], state.plan[i]]; savePlan(); renderPlan(); drawPlanRoute(); }
  });

  /* ---------- Start ---------- */
  function readHash() {
    const h = location.hash.slice(1);
    if (h.startsWith("plan=")) {
      const params = new URLSearchParams(h.replace("plan=", "plan=").replace(/&/g, "&"));
      const ids = (params.get("plan") || "").split(",").filter(id => byId[id]);
      if (ids.length) { state.plan = ids; state.planStart = params.get("start") || state.planStart; savePlan(); showTab("plan", false); return; }
    }
    if (h.startsWith("p=")) { const id = h.slice(2); if (byId[id]) { showTab("explore", false); openDetail(id); return; } }
    if (["explore", "map", "plan", "info"].includes(h)) { showTab(h, false); return; }
    showTab("explore", false);
  }

  renderChips(); renderGrid(); renderItineraries(); renderInfo(); updatePlanCount();
  tickClock(); setInterval(tickClock, 30000); loadWeather();
  readHash();
  window.addEventListener("hashchange", () => { if (!sheet.open && !routeDlg.open) readHash(); });

  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
})();
