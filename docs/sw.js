// Install the service worker
self.addEventListener('install', event => {
	console.log('Service worker is installed');
});

// Service worker is activated
self.addEventListener('activate', event => {
	console.log('Service worker has been activated');
});

// Fetch events
self.addEventListener('fetch', event => {
	console.log('Fetch event: ', event);
});
