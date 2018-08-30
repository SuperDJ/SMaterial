const buttons = Array.from( document.querySelectorAll( '.button' ) );

buttons.forEach( button => {
    button.setAttribute('role', 'button');
});
