/*
  GazeVoice service worker: makes the app installable and usable offline.
  Strategy: serve from cache immediately, refresh the cache in the background
  (stale-while-revalidate). A new version shows up on the next app launch.
  Bump CACHE_VERSION when the list of files below changes.
*/
const CACHE_VERSION = 'gazevoice-v1';
const TAILWIND_URL = 'https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    await cache.addAll(APP_SHELL);
    // Cross-origin script without CORS headers: cache the opaque response.
    try {
      await cache.put(TAILWIND_URL, await fetch(TAILWIND_URL, { mode: 'no-cors' }));
    } catch (e) {
      // Offline during install: it will be cached on the next online load.
    }
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

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isTailwind = request.url === TAILWIND_URL;
  if (!isSameOrigin && !isTailwind) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VERSION);
    // Navigations (opening the app) always map to the cached index page.
    const cacheKey = request.mode === 'navigate' ? './index.html' : request;
    const cached = await cache.match(cacheKey, { ignoreSearch: request.mode === 'navigate' });

    const refresh = fetch(isTailwind ? new Request(TAILWIND_URL, { mode: 'no-cors' }) : request)
      .then((response) => {
        if (response && (response.ok || response.type === 'opaque')) {
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
