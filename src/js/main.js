/**************************************
 * Buttons
 /**************************************/

let buttons = document.getElementsByClassName('button');

if( buttons )
{
	for( let i = 0; i < buttons.length; i++ )
	{
		let button = buttons[i];

		button.addEventListener('click', e => {
			let rect = e.target.getBoundingClientRect(),
				x = Math.ceil( e.clientX - rect.left ),
				y = Math.ceil( e.clientY - rect.top );

			console.log(x, y);
		})
	}
}

/**************************************
 * Navigation drawer
 **************************************/

let drawers = document.getElementsByClassName('drawer');

if( drawers ) 
{
	for( let i = 0 ; i < drawers.length; i++ )
	{
		let drawer = drawers[i];
	}
}

/**************************************
 * Tabs
 **************************************/
let tabs = document.getElementsByClassName('tabs__tab');

if( tabs )
{
	for( let i = 0; i < tabs.length; i++ )
	{
		let tab = tabs[i];
		let width = tab.getBoundingClientRect().width;

		tab.style.setProperty('--tabs__tab-width', `${width}px`);

		tab.addEventListener( 'click', e => {
			let rect = e.target.getBoundingClientRect(),
				left = Math.ceil( e.clientX - rect.left ),
				top = Math.ceil( e.clientY - rect.top );

			tab.style.setProperty('--tabs__tab__riple-left', `${left}px`);
			tab.style.setProperty('--tabs__tab__riple-top', `${top}px`);
		});
	}
}

/**************************************
 * Text fields
 **************************************/
let textFields = document.getElementsByClassName('text-field__input');

if( textFields ) 
{
	for( let i = 0; i < textFields.length; i++ ) {
		let textField = textFields[i];
		let value = textField.value;
		let container = textField.parentElement;

		if( !container ) 
		{
			console.error('Input does not have a container');
		}

		value !== '' && value.length > 0 ? container.classList.add('text-field--active') : container.classList.remove('text-field--active');

		textField.addEventListener('focus', () => {
			container.classList.add('text-field--focus');
		});

		textField.addEventListener('blur', () => {
			container.classList.remove('text-field--focus');
		})

		textField.addEventListener('input', () => {
			value = textField.value;
			if( value !== '' && value.length > 0 )
			{
				container.classList.add('text-field--active');
			} else {
				container.classList.remove('text-field--active');
			}
		}); 
	}
}

/**************************************
 * Tooltips
 **************************************/

let tooltips = document.getElementsByClassName('tooltip__content');

if( tooltips ) 
{
	for( let i = 0; i < tooltips.length; i++ )
	{
		let tooltip = tooltips[i];
		let width = tooltip.getBoundingClientRect().width;
		tooltip.style.setProperty('--tooltip-width', `${width}px`);
	}
}