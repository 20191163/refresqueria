const LOADING_SCREEN_TIMEOUT = 2000; // Tiempo en milisegundos

self.addEventListener('install', (event) => {
  event.waitUntil(
    new Promise((resolve) => {
      setTimeout(resolve, LOADING_SCREEN_TIMEOUT);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});