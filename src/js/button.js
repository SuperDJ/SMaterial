const buttons = Array.from( document.querySelectorAll( '.button' ) );

class Button
{
	constructor( buttons )
	{
		this.buttons = buttons;

		this.setRole();
	}

	setRole()
	{
		this.buttons.forEach( button =>
		{
			button.setAttribute('role', 'button');
		});
	}
}

new Button( buttons );