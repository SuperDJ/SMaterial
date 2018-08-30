const badges = Array.from( document.querySelectorAll( '.badge' ) );

badges.forEach( badge => {
    const content = badge.querySelector( '.badge__content' );
    const size = badge.getBoundingClientRect();

    content.style.setProperty( '--badge-width', `${size.width}px` );
    content.style.setProperty( '--badge-height', `${size.height}px` );
});
