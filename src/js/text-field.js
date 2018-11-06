export default class TextField
{
	constructor( textField )
	{
		this.textField = textField;
		this.value = this.textField.value;
		this.container = this.textField.parentElement;

		this.checkContainer();
		this.loaded();
		this.input();
		this.focus();
		this.blur();
	}

	checkContainer()
	{
		if( !this.container ) {
			console.warn( 'Input has no container' );
		}
	}

	loaded()
	{
		this.value !== '' && this.value.length > 0 ? this.container.classList.add( 'text-field--active' ) : this.container.classList.remove( 'text-field--active' );
	}

	input()
	{
		this.textField.addEventListener( 'input', () => {
			this.value = this.textField.value;

			if( this.value !== '' && this.value.length > 0 )
			{
				this.container.classList.add( 'text-field--active' );
			}
			else
			{
				this.container.classList.remove( 'text-field--active' );
			}
		});
	}

	focus()
	{
		this.textField.addEventListener( 'focus', () =>
		{
			this.container.classList.add( 'text-field--focus' );
		});
	}

	blur()
	{
		this.textField.addEventListener( 'blur', () =>
		{
			this.container.classList.remove( 'text-field--focus' );
		});
	}
}