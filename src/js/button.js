const buttons = document.getElementsByClassName( 'button' );

class Button
{
	constructor( button )
	{
		this.button = button;

		this.setRole();
	}

	setRole()
	{
		this.button.setAttribute('role', 'button');
	}
}

for( let button of buttons )
{
	new Button( button );
}