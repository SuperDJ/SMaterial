/**************************************
 * Switch
 **************************************/

export class Switch
{
	constructor( switchEl )
	{
		this.switchEl = switchEl;

		this.setRole();
	}

	setRole()
	{
		this.switchEl.setAttribute( 'role', 'switch' );
		this.switchEl.setAttribute( 'aria-checked', this.switchEl.checked );
		this.switchEl.setAttribute( 'aria-disabled', this.switchEl.disabled );

		this.switchEl.addEventListener( 'click', () =>
		{
			this.switchEl.setAttribute( 'aria-checked', this.switchEl.checked );
		});
	}
}

/**************************************
 * Checkbox
 **************************************/

export class Checkbox
{
	constructor( checkbox )
	{
		this.checkbox = checkbox;

		this.setRole();
	}

	setRole()
	{
		this.checkbox.setAttribute( 'role', 'checkbox' );
		this.checkbox.setAttribute( 'aria-checked', this.checkbox.checked );
		this.checkbox.setAttribute( 'aria-disabled', this.checkbox.disabled );

		this.checkbox.addEventListener( 'click', () =>
		{
			this.checkbox.setAttribute( 'aria-checked', this.checkbox.checked );
		});
	}
}

/**************************************
 * Radio buttons
 **************************************/

export class Radio
{
	constructor( radio )
	{
		this.radio = radio;

		this.setRole();
	}

	setRole()
	{
		this.radio.setAttribute( 'role', 'radio' );
		this.radio.setAttribute( 'aria-checked', this.radio.checked );
		this.radio.setAttribute( 'aria-disabled', this.radio.disabled );

		this.radio.addEventListener( 'click', () =>
		{
			this.radio.setAttribute( 'aria-checked', this.radio.checked );
		});
	}
}