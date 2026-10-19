/* TMR Mitra - Version 1 Beta. Offline helper. Cache-first, refreshed in the background. */
const CACHE_NAME = 'tmrs-ctrl-msg-v1-beta-r64';
const ASSETS = [
  './', './index.html', './manifest.json', './stations.json',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png', './favicon-32x32.png',
  './fonts/NotoSansTelugu-400.woff2', './fonts/NotoSansTelugu-700.woff2',
  './fonts/NotoSansDevanagari-400.woff2', './fonts/NotoSansDevanagari-700.woff2'
];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {})))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE_NAME).then(c => c.match(e.request, {ignoreSearch: true}).then(hit => {
    const net = fetch(e.request).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  })));
});
