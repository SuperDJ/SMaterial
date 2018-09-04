let triggered = []; // Store all elements that are triggered
const triggers = Array.from( document.querySelectorAll( '[data-trigger]' ) );

triggers.forEach( trigger =>
{
	let element = document.querySelector( `#${trigger.dataset.trigger}` );

	if( !element )
	{
		console.error('Trigger element not found');
	}

	trigger.classList.add('cursor--pointer');
	let className = `${element.classList[ 0 ]}--active`;

	trigger.addEventListener( 'click', event =>
	{
		event.preventDefault();

		// Set the currently triggered element(s) in array
		if( triggered.indexOf( element ) < 0 )
		{
			triggered.push( element );
		}

		element.classList.toggle( className );
	} );
});

document.addEventListener( 'mouseup', ( e ) =>
{
	triggered.forEach( ( trigger, i ) =>
	{
		if( trigger === e.target || trigger !== e.target && !trigger.contains( e.target ) )
		{
			let className = `${trigger.classList[0]}--active`;
			trigger.classList.remove( className );

			// Remove element from array
			i === 0 ? triggered.shift() : triggered.slice( i, 1 );
		}
	});
});
