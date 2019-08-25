let triggered = []; // Store all elements that are triggered
const triggers = Array.from( document.querySelectorAll( '[data-trigger]' ) );
const exceptions = [ 'drawer', ]; // TODO make more dynamic

triggers.forEach( trigger =>
{
	let element = document.getElementById( `${trigger.dataset.trigger}` );

	if( !element )
	{
		console.warn(`Trigger element "${trigger.dataset.trigger}" not found`);
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
		let css = '';

		// Set the currently triggered element(s) in array
		if( triggered.indexOf( element ) < 0 )
		{
			triggered.push( element );
		}

		if( element.classList.contains( className ) )
		{
			element.classList.remove( className );
			css = `max-width: 0; max-height: 0;`;
		}
		else
		{
			element.classList.add( className );
			css = `max-width: ${width}px; max-height: ${height}px;`;
		}

		if( exceptions.indexOf(element.classList[0]) > 0 )
		{
			element.style.cssText = css;
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
