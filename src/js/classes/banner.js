export default class Banner
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
