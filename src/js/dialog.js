const dialogs = Array.from( document.querySelectorAll( '.dialog' ) );

dialogs.forEach( dialog => {
    dialog.setAttribute( 'role', 'dialog' );
});
