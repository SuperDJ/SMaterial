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

class Tooltip
{
	constructor( tooltip )
	{
		this.tooltip = tooltip;
		this.content = this.tooltip.getElementsByClassName( 'tooltip__content' )[0];
		this.controller = this.tooltip.firstElementChild;

		this.setCenter();
		this.setRole()
	}

	setCenter()
	{
		let width = this.content.getBoundingClientRect().width;
		this.content.style.setProperty( '--tooltip-width', `${width}px` );
	}

	setRole()
	{
		let id = 'tooltip';

		this.controller.setAttribute( 'aria-describedby', id );
		this.controller.setAttribute( 'aria-haspopup', 'true' );

		this.content.setAttribute( 'id', id );
		this.content.setAttribute( 'role', 'tooltip' );

	}
}

for( let tooltip of tooltips )
{
	new Tooltip( tooltip );
}