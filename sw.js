/*
  GazeVoice service worker: makes the app installable and usable offline.
  Strategy: serve from cache immediately, refresh the cache in the background
  (stale-while-revalidate). A new version shows up on the next app launch.
  Bump CACHE_VERSION whenever files change, so installed apps fetch the new copy.
  Everything the app needs (fonts included) lives in this repository, so it
  works fully offline and does not depend on any outside server.
*/
const CACHE_VERSION = 'gazevoice-v2';

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/andika-400-latin-ext.woff2",
  "./fonts/andika-400-latin.woff2",
  "./fonts/andika-700-latin-ext.woff2",
  "./fonts/andika-700-latin.woff2",
  "./fonts/baloo2-500-800-latin-ext.woff2",
  "./fonts/baloo2-500-800-latin.woff2",
  "./fonts/fonts.css",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VERSION);
    // Navigations (opening the app) always map to the cached index page.
    const cacheKey = request.mode === 'navigate' ? './index.html' : request;
    const cached = await cache.match(cacheKey, { ignoreSearch: request.mode === 'navigate' });

    const refresh = fetch(request)
      .then((response) => {
        if (response && response.ok) {
          cache.put(cacheKey, response.clone());
        }
        return response;
      })
      .catch(() => null);

    if (cached) {
      event.waitUntil(refresh);
      return cached;
    }
    const fresh = await refresh;
    return fresh || new Response('Offline', { status: 503, statusText: 'Offline' });
  })());
});
