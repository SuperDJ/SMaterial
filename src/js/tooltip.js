const tooltips = Array.from( document.querySelectorAll( '.tooltip' ) );

tooltips.forEach( tooltip =>
{
	let content = tooltip.querySelector( '.tooltip__content' );
	let width = content.getBoundingClientRect().width;
	let id = `tooltip-${i}`;

	// Element triggering tooltip
	tooltip.childNodes.forEach( controller =>
	{
		if( !controller.classList.contains( 'tooltip__content' ) )
		{
			controller.setAttribute( 'aria-describedby', id );
			controller.setAttribute( 'aria-haspopup', true );
		}
	});

	content.setAttribute( 'id', id );
	content.setAttribute( 'role', 'tooltip' );
	content.style.setProperty( '--tooltip-width', `${width}px` );
});
