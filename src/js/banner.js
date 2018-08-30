const banners = Array.from( document.querySelectorAll( '.banner' ) );

banners.forEach( banner => {
    banner.setAttribute( 'role', 'banner' );
});
