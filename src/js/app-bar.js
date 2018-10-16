const appBars = Array.from( document.querySelectorAll( '.app-bar' ) );
let container = document.querySelector( '.container' );

appBars.forEach( appBar =>
{
	let i = 0;

	[ 'resize', 'load', ].forEach( ( e ) =>
	{
		window.addEventListener( e, () =>
		{
			const style = window.getComputedStyle(appBar);
			container.style.setProperty( '--app-bar-height', `${style.height}` );

			// Create temporary element to add meta theme tags
			// Only execute once
			if( i < 1 )
			{
				let temp = document.createElement( 'div' );
				temp.innerHTML = `
					<meta name="theme-color" content="${style.backgroundColor}">
					<meta name="msapplication-navbutton-color" content="${style.backgroundColor}">
					<meta name="apple-mobile-web-app-status-bar-style" content="${style.backgroundColor}">
				`;

				while( temp.firstChild )
				{
					document.head.appendChild( temp.firstChild );
				}
				i++;
			}
		});
	});

	/*
     TODO turn back on when browser support is better
     new ResizeObserver( () => {
     let height = appBar.getBoundingClientRect().height;
     container.style.setProperty( '--app-bar-height', `${height}px` );
     }).observe(appBar);
     */
});
