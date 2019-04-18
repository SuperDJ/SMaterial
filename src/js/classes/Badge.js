export default class Badge
{
	constructor( badge )
	{
		this.badge = badge;

		this.setStyle();
	}

	setStyle()
	{
		let content = this.badge.getElementsByClassName( 'badge__content' )[0];
		let size = this.badge.getBoundingClientRect();

		content.style.setProperty( '--badge-width', `${size.width}px` );
		content.style.setProperty( '--badge-height', `${size.height}px` );
	}
}