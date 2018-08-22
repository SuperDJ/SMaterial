const badges = document.getElementsByClassName( 'badge' );

if( badges )
{
    for( let i = 0; i < badges.length; i++ )
    {
        let badge = badges[i];
        let content = badge.getElementsByClassName( 'badge__content' )[0];
        let size = badge.getBoundingClientRect();

        content.style.setProperty( '--badge-width', `${size.width}px` );
        content.style.setProperty( '--badge-height', `${size.height}px` );
    }
}
