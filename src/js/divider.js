const dividers = Array.from( document.querySelectorAll( '.divider' ) );

class Divider
{
	constructor( dividers )
	{
		this.dividers = dividers;

		this.setRole();
		this.setOrientation();
	}

	setRole()
	{
		this.dividers.forEach( divider =>
		{
			divider.setAttribute( 'role', 'separator' );
		});
	}

	setOrientation( orientation = 'horizontal' )
	{
		this.dividers.forEach( divider =>
		{
			divider.setAttribute( 'aria-orientation', orientation );
		});
	}
}

new Divider( dividers );
