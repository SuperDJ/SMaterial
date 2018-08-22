const banners = document.getElementsByClassName( 'banner' );

if( banners )
{
    for( let i = 0; i < banners.length; i++ )
    {
        let banner = banners[i];

        // Set role
        banner.setAttribute( 'role', 'banner' );
    }
}
