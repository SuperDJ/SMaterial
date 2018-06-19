/**************************************
 * Buttons
 /**************************************/

let buttons = document.querySelectorAll('.button');

for( let i = 0; i < buttons.length; i++ )
{
	let button = buttons[i];

	console.log(button);

	button.addEventListener('click', e => {
		let rect = e.target.getBoundingClientRect(),
			x = Math.ceil( e.clientX - rect.left ),
			y = Math.ceil( e.clientY - rect.top );

		console.log(x, y);
	})
}