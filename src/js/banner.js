const banners = Array.from( document.querySelectorAll( '.banner' ) );

class Banner
{
	constructor( banners )
	{
		this.banners = Array.from( banners );

		this.setRole();
	}

	setRole()
	{
		this.banners.forEach( banner =>
		{
			banner.setAttribute( 'role', 'banner' );
		});
	}
}

new Banner( banners );
