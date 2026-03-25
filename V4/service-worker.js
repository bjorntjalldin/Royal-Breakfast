const CACHE_NAME = "royal-breakfast-pos-v1";
const APP_FILES = [
  "./",
  "./royal_breakfast_pos.html",
  "./manifest.json",
  "./royal_breakfast.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});