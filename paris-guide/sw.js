/* Service worker – appskalet fungerar offline, bilder och kartor hämtas när nät finns. */
const VERSION = "paris-guide-v1";
const SHELL = ["./", "./index.html", "./styles.css", "./app.js", "./data.js", "./transit.js", "./manifest.json", "./icon.svg",
  "./vendor/leaflet.js", "./vendor/leaflet.css", "./vendor/images/marker-icon.png", "./vendor/images/marker-shadow.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.origin === location.origin) {
    // Nätet först för appfiler så att uppdateringar syns, cache som reserv
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request)));
    return;
  }
  if (/upload\.wikimedia\.org|fonts\.gstatic\.com|fonts\.googleapis\.com/.test(url.host)) {
    // Bilder och typsnitt: cache först
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION + "-assets").then(c => c.put(e.request, copy)); return r; })));
  }
});
