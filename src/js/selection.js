/**************************************
 * Switch
 **************************************/
const switches = Array.from( document.querySelectorAll( '.switch' ) );

switches.forEach( switchElement => {
    switchElement.setAttribute( 'role', 'switch' );
    switchElement.setAttribute( 'aria-checked', switchElement.checked );
    switchElement.setAttribute( 'aria-disabled', switchElement.disabled );

    switchElement.addEventListener( 'click', () => {
        switchElement.setAttribute( 'aria-checked', switchElement.checked );
    });
});

/**************************************
 * Checkbox
 **************************************/
/*
const checkboxes = document.getElementsByClassName( 'switch' );

if( checkboxes )
{
    for( let i = 0; i < checkboxes.length; i++ )
    {
        let checkbox = checkboxes[i];

        checkbox.setAttribute( 'role', 'switch' );
        checkbox.setAttribute( 'aria-checked', checkbox.checked );
        checkbox.setAttribute( 'aria-disabled', checkbox.disabled );

        checkbox.addEventListener( 'click', () => {
            checkbox.setAttribute( 'aria-checked', checkbox.checked );
        });
    }
} */
