self.addEventListener('install', event => {
    console.log('Service Worker 已安裝');
});

self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});