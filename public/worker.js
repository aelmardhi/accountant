// import assets from './asset-manifest.json';

var cacheName = 'accountant-v1';
const allCaches = [cacheName];

self.importScripts([])

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return fetch('./asset-manifest.json')
      .then(r=>r.json())
      .then((assets)=>{
        return cache.addAll(assets.files);
      })
      
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('accountant-') &&
                 !allCaches.includes(cacheName);
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  event.waitUntil(
    // Retrieve a list of the clients of this service worker.
    self.clients.matchAll().then(function(clientList) {
      // Check if there's at least one focused client.
      var focused = clientList.some(function(client) {
        return client.focused;
      });
      var payload = event.data.json();
      // var notificationMessage;
      // if (focused) {
      //   notificationMessage = 'You\'re still here, thanks!';
      // } else if (clientList.length > 0) {
      //   notificationMessage = 'You haven\'t closed the page, ' +
      //                         'click here to focus it!';
      // } else {
      //   notificationMessage = 'You have closed the page, ' +
      //                         'click here to re-open it!';
      // }

      
      // return self.registration.showNotification('Dardasha', {
      //   body: payload.body,
      //   title: payload.title,
      //   icon:'/icons/icon144.png',
      //   badge:'/icons/icon192_maskable.png',
      // });
    })
  );
});

// Register event listener for the 'notificationclick' event.
self.addEventListener('notificationclick', function(event) {
  event.waitUntil(
    // Retrieve a list of the clients of this service worker.
    self.clients.matchAll().then(function(clientList) {
      // If there is at least one client, focus it.
      if (clientList.length > 0) {
        return clientList[0].focus();
      }

      // Otherwise, open a new page.
      return self.clients.openWindow('/index.html');
    })
  );
});