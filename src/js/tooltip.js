const tooltips = Array.from( document.querySelectorAll( '.tooltip' ) );

tooltips.forEach( ( tooltip, i ) =>
{
	const content = tooltip.querySelector( '.tooltip__content' );
	let width = content.getBoundingClientRect().width;
	const id = `tooltip-${i}`;
	const controller = tooltip.firstElementChild;

	controller.setAttribute( 'aria-describedby', id );
	controller.setAttribute( 'aria-haspopup', 'true' );

	content.setAttribute( 'id', id );
	content.setAttribute( 'role', 'tooltip' );
	content.style.setProperty( '--tooltip-width', `${width}px` );
});
