/* Service worker: menyimpan halaman dan huruf agar website tetap terbuka tanpa internet (foto disimpan di IndexedDB) */
const VERSION = 'v2';
const PAGE_CACHE = 'kimia-halaman-' + VERSION;
const IMG_CACHE = 'kimia-huruf-v1'; // foto disimpan terpisah di IndexedDB oleh halaman
const PAGES = ['./', './index.html', './kelas-xi/index.html', './kelas-xii/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(PAGE_CACHE).then(c => c.addAll(PAGES)).catch(() => {}).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => (k.startsWith('kimia-halaman-') && k !== PAGE_CACHE) || k === 'kimia-gambar-v1').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

const isAsset = url => url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';

self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (isAsset(url)) {
    // cache-first: gambar & huruf
    e.respondWith(caches.open(IMG_CACHE).then(async c => {
      const hit = await c.match(req.url, { ignoreVary: true });
      if (hit) return hit;
      try {
        let res = null;
        if (req.destination === 'image') { try { res = await fetch(req.url, { mode: 'cors', credentials: 'omit' }); if (!res.ok) res = null; } catch (e2) { res = null; } }
        if (!res) res = await fetch(req);
        if (res && (res.ok || res.type === 'opaque')) c.put(req.url, res.clone()).catch(() => {});
        return res;
      }
      catch (err) { return hit || Response.error(); }
    }));
    return;
  }
  if (url.origin === self.location.origin) {
    // network-first: halaman tetap mendapat pembaruan, tetapi tersedia saat offline
    e.respondWith(fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(PAGE_CACHE).then(c => c.put(req, copy)); } return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html'))));
  }
});
