/* Const textFields = Array.from( document.querySelectorAll( '.text-field__input' ) );

textFields.forEach( textField =>
{
	let value = textField.value;
	let container = textField.parentElement;

	if( !container )
	{
		console.error('Input does not have a container');
	}

	value !== '' && value.length > 0 ? container.classList.add( 'text-field--active' ) : container.classList.remove( 'text-field--active' );

	textField.addEventListener( 'focus', () =>
	{
		container.classList.add( 'text-field--focus' );
	});

	textField.addEventListener( 'blur', () =>
	{
		container.classList.remove( 'text-field--focus' );
	});

	textField.addEventListener( 'input', () =>
	{
		value = textField.value;

		if( value !== '' && value.length > 0 )
		{
			container.classList.add( 'text-field--active' );
		}
		else
		{
			container.classList.remove( 'text-field--active' );
		}
	});
}); */

const textFields = document.getElementsByClassName( 'text-field__input' );

class TextField
{
	constructor( textField )
	{
		this.textField = textField;
		this.container = this.textField.parentElement;
		this.value = textField.value;

		this.check();
		this.blur();
		this.focus();
		this.input();
	}

	check()
	{
		if( !this.container )
		{
			console.error('Input does not have a container');
		}
	}

	focus()
	{
		this.textField.addEventListener( 'focus', () =>
		{
			container.classList.add( 'text-field--focus' );
		});
	}

	blur()
	{
		this.textField.addEventListener( 'blur', () =>
		{
			container.classList.remove( 'text-field--focus' );
		});
	}

	input()
	{
		this.textField.addEventListener( 'input', () =>
		{
			this.value = this.textField.value;

			if( value !== '' && value.length > 0 )
			{
				container.classList.add( 'text-field--active' );
			}
			else
			{
				container.classList.remove( 'text-field--active' );
			}
		});
	}
}

for( let textField of textFields )
{
	new TextField( textField );
}