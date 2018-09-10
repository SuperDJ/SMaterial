let triggered = []; // Store all elements that are triggered
const triggers = Array.from( document.querySelectorAll( '[data-trigger]' ) );

triggers.forEach( trigger =>
{
	let element = document.getElementById( `${trigger.dataset.trigger}` );

	if( !element )
	{
		console.error('Trigger element not found');
	}

	// Remember size
	const size = element.getBoundingClientRect();
	const height = size.height;
	const width = size.width;

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

		console.log(width, height);

		if( element.classList.contains( className ) )
		{
			element.classList.remove( className );
			element.style.cssText = `max-width: 0; max-height: 0;`;
		}
		else
		{
			element.classList.add( className );
			element.style.cssText = `max-width: ${width}px; max-height: ${height}px;`;
		}
	} );
});

document.addEventListener( 'mouseup', ( e ) =>
{
	triggered.forEach( ( trigger, i ) =>
	{
		if( e.target.dataset.trigger !== trigger.getAttribute( 'id' ) && trigger !== e.target && !trigger.contains( e.target ) )
		{
			let className = `${trigger.classList[0]}--active`;
			trigger.classList.remove( className );

			// Remove element from array
			i === 0 ? triggered.shift() : triggered.slice( i, 1 );
		}
	});
});
