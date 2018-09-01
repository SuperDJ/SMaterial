const badges = Array.from( document.querySelectorAll( '.badge' ) );

/*Badges.forEach( badge => {
    const content = badge.querySelector( '.badge__content' );
    const size = badge.getBoundingClientRect();

    content.style.setProperty( '--badge-width', `${size.width}px` );
    content.style.setProperty( '--badge-height', `${size.height}px` );
});*/

class Badge
{
	constructor( badges )
	{
		this.badges = Array.from( badges );

		this.setDimensions();
	}

	setDimensions()
	{
		this.badges.forEach( badge =>
		{
	   		let content = badge.querySelector( '.badge__content' );
	   		let size = badge.getBoundingClientRect();

	   		content.style.setProperty( '--badge-width', `${size.width}px` );
	   		content.style.setProperty( '--badge-height', `${size.height}px` );
		});
	}
}

new Badge( badges );