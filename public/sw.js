// Service Worker Cleanup
// This ensures that any old cached versions are removed and the SW unregisters itself.

self.addEventListener('install', (event) => {
    // Skip waiting to activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Unregister this SW and claim clients
    event.waitUntil(
        self.registration.unregister()
            .then(() => self.clients.claim())
            .then(() => {
                // Optional: Force reload all clients
                return self.clients.matchAll();
            })
            .then((clients) => {
                clients.forEach((client) => {
                    // Send a message to the client to reload if needed, 
                    // or just let the next navigation handle it.
                    // For now, we just unregister.
                    console.log('Service Worker unregistered.');
                });
            })
    );
});
