// Caches the app shell so Cliptic opens offline, and adds cross-origin-isolation headers so the speech engine can use several CPU cores.
const CACHE = 'cliptic-v6';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
function isolate(r){
  if (!r || r.type === 'opaque' || r.type === 'error' || r.status === 0) return r;
  const h = new Headers(r.headers); h.set('Cross-Origin-Opener-Policy', 'same-origin'); h.set('Cross-Origin-Embedder-Policy', 'credentialless');
  return new Response(r.status === 204 || r.status === 304 ? null : r.body, {status: r.status, statusText: r.statusText, headers: h});
}
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return; // models and CDN scripts are not touched
  e.respondWith((async () => {
    let r; try{ r = await fetch(e.request); if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } }
    catch{ r = await caches.match(e.request) || await caches.match('index.html'); if (!r) return Response.error(); }
    return isolate(r);
  })());
});
