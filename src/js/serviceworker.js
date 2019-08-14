if( 'serviceWorker' in navigator )
{
	navigator.serviceWorker.register('/sw.js')
		.then(reg => console.log('Service worker registered', reg))
		.catch(error => console.warn('Service worker not registered', error));
}
