/**************************************
 * Switch
 **************************************/

const switches = Array.from( document.querySelectorAll( '.switch' ) );

class Switch
{
	constructor( switches )
	{
		this.switches = switches;

		this.setRole();
	}

	setRole()
	{
		this.switches.forEach( switchElement =>
		{
			switchElement.setAttribute( 'role', 'switch' );
			switchElement.setAttribute( 'aria-checked', switchElement.checked );
			switchElement.setAttribute( 'aria-disabled', switchElement.disabled );

			switchElement.addEventListener( 'click', () =>
			{
				switchElement.setAttribute( 'aria-checked', switchElement.checked );
			});
		});
	}
}

new Switch( switches );

/**************************************
 * Checkbox
 **************************************/

const checkboxes = Array.from( document.querySelectorAll( '.checkbox' ) );

class Checkbox
{
	constructor( checkboxes )
	{
		this.checkboxes = checkboxes;

		this.setRole();
	}

	setRole()
	{
		this.checkboxes.forEach( checkbox =>
		{
			checkbox.setAttribute( 'role', 'checkbox' );
			checkbox.setAttribute( 'aria-checked', checkbox.checked );
			checkbox.setAttribute( 'aria-disabled', checkbox.disabled );

			checkbox.addEventListener( 'click', () =>
			{
				checkbox.setAttribute( 'aria-checked', checkbox.checked );
			});
		});
	}
}

new Checkbox( checkboxes );

/**************************************
 * Radio buttons
 **************************************/

const radios = Array.from( document.querySelectorAll( '.radio' ) );

class Radio
{
	constructor( radios )
	{
		this.radios = radios;

		this.setRole();
	}

	setRole()
	{
		this.radios.forEach( radio =>
		{
			radio.setAttribute( 'role', 'radio' );
			radio.setAttribute( 'aria-checked', radio.checked );
			radio.setAttribute( 'aria-disabled', radio.disabled );

			radio.addEventListener( 'click', () =>
			{
				radio.setAttribute( 'aria-checked', radio.checked );
			});
		});
	}
}

new Radio( radios );
