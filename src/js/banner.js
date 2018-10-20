const banners = document.getElementsByClassName( 'banner' );

class Banner
{
	constructor( banner )
	{
		this.banner = banner;

		this.setRole();
	}

	setRole()
	{
		this.banner.setAttribute( 'role', 'banner' );
	}
}

for( let banner of banners )
{
	new Banner( banner );
}
