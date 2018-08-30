const dividers = Array.from( document.querySelectorAll( '.divider' ) );

dividers.forEach( divider => {
    divider.setAttribute( 'role' , 'separator' );
    divider.setAttribute( 'aria-orientation' , 'horizontal' );
});
