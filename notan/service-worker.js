// Notan – service worker. App-skalet cachas för offline-start; samma-ursprungs-filer
// hämtas "stale-while-revalidate" så att uppdateringar når användaren utan att cachen byter namn.
const CACHE_NAME = 'notan-v2';
const APP_FILES = ['./', './index.html', './calc.js', './firebase-config.js', './manifest.json', './icon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.all(APP_FILES.map((f) => cache.add(f).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase, CDN m.m. går direkt mot nätet

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Navigeringar (t.ex. ?g=KOD) mappas till appskalet
      const key = req.mode === 'navigate' ? './index.html' : req;
      const cached = await cache.match(key);
      const network = fetch(req).then((res) => {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(() => null);
      if (cached) { event.waitUntil(network); return cached; }
      const res = await network;
      return res || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
    })
  );
});
