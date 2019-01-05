export default class Tooltip
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