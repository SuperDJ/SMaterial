const dialogs = document.getElementsByClassName( 'dialog' );

if( dialogs )
{
    for( let i = 0; i < dialogs.length; i++ )
    {
        let dialog = dialogs[i];
        dialog.setAttribute( 'role', 'dialog' );
    }
}
