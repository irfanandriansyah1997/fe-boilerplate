/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
const VERSION = '1.0.0';
const ASSET_CACHE = `asset-cache-${VERSION}`;
const VENDOR_CACHE = `vendor-cache-${VERSION}`;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    (async function () {
      if (
        event.request.url.indexOf('/gif/') >= 0 ||
        event.request.url.indexOf('/png/') >= 0 ||
        event.request.url.indexOf('/static/js/') >= 0 ||
        event.request.url.indexOf('/static/css/') >= 0
      ) {
        const cache = await caches.open(ASSET_CACHE);
        return cache
          .match(event.request)
          .then((cachedResponse) => {
            if (!cachedResponse) {
              throw new Error();
            }
            return cachedResponse;
          })
          .catch(async () => {
            const networkResponse = await fetch(event.request);
            event.waitUntil(cache.put(event.request, networkResponse.clone()));
            return networkResponse;
          });
      }

      if (
        event.request.url.indexOf('public.urbanindo.com') >= 0 ||
        event.request.url.indexOf('fonts.googleapis.com') >= 0 ||
        event.request.url.indexOf('fonts.gstatic.com') >= 0
      ) {
        const cache = await caches.open(VENDOR_CACHE);
        return cache
          .match(event.request)
          .then((cachedResponse) => {
            if (!cachedResponse) {
              throw new Error();
            }
            return cachedResponse;
          })
          .catch(async () => {
            const networkResponse = await fetch(event.request);
            event.waitUntil(cache.put(event.request, networkResponse.clone()));
            return networkResponse;
          });
      }

      return fetch(event.request);
    })()
  );
});
