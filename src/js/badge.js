export default class Badge
{
	constructor( badge )
	{
		this.badge = badge;

		this.setDimensions();
	}

	setDimensions()
	{
		let content = this.badge.querySelector( '.badge__content' );
		let size = this.badge.getBoundingClientRect();

		content.style.setProperty( '--badge-width', `${size.width}px` );
		content.style.setProperty( '--badge-height', `${size.height}px` );
	}
}