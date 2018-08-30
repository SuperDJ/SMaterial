const active = new Event('active', {'bubbles': true, 'cancelable': true});
const inactive = new Event('inactive', {'bubbles': true, 'cancelable': true});
let triggered = []; // Store all elements that are triggered
const triggers = Array.from( document.querySelectorAll( '[data-trigger]' ) );

triggers.forEach( trigger => {
    let id = trigger.dataset.trigger;
    let element = document.getElementById( id );

    trigger.classList.add('cursor--pointer');

    if( !element )
    {
        console.error('Trigger element not found');
    }

    if( element ) {
        let className = `${element.classList[ 0 ]}--active`;

        trigger.addEventListener( 'click', () =>
        {
            // Set the currently triggered element(s) in array
            triggered.indexOf( element ) < 0 ? triggered.push( element ) : '';

            if( element.classList.contains( className ) ) {
                element.classList.remove( className );
                document.dispatchEvent( inactive );
            } else {
                element.classList.add( className );
                document.dispatchEvent( active );
            }
        } );

        document.addEventListener( 'mouseup', ( e ) =>
        {
            for( let i = 0; i < triggered.length; i++ )
            {
                let trigger = triggered[ i ];

                if( trigger === e.target || trigger !== e.target && !trigger.contains( e.target ) ) {
                    trigger.classList.remove( className );
                    document.dispatchEvent( inactive );
                } else {
                    element.classList.add( className );
                    document.dispatchEvent( active );
                }
            } );

                    // Remove element from array
                    i === 0 ? triggered.shift() : triggered.slice( i, 1 );
                }
            }
        });
    }
});
