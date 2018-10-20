const badges = document.getElementsByClassName( 'badge' );

class Badge
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

for( let badge of badges )
{
	new Badge( badge );
}