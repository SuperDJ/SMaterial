const dividers = document.getElementsByClassName( 'divider' );

if( dividers )
{
    for( let i = 0; i < dividers.length; i++ )
    {
        let divider = dividers[i];

        divider.setAttribute( 'role' , 'separator' );
        divider.setAttribute( 'aria-orientation' , 'horizontal' );
    }
}
