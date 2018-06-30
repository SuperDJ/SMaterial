/**************************************
 * Buttons
 /**************************************/

let buttons = document.querySelectorAll('.button');

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

let tooltips = document.querySelectorAll('.tooltip__content');

for( let i = 0; i < tooltips.length; i++ )
{
	let tooltip = tooltips[i];
	let width = tooltip.getBoundingClientRect().width;
	tooltip.style.setProperty('--tooltip-width', `${width}px`);
}