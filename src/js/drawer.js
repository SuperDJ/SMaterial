const drawers = Array.from( document.querySelectorAll( '.drawer' ) );

drawers.forEach( drawer => {
    let parents = drawer.querySelectorAll( '.drawer__item__parent' );

    parents.forEach( parent => {
        let child = parent.nextElementSibling;
        let height = child.getBoundingClientRect().height;

        child.style.maxHeight = 0;
        child.style.display = 'none';

        parent.addEventListener( 'click', () => {
            if( child.classList.contains( 'active' ) )
            {
                child.style.maxHeight = 0;
                child.classList.remove( 'active' );
                child.style.display = 'none';
            } else {
                child.style.display = 'block';
                child.style.maxHeight = `${height}px`;
                child.classList.add( 'active' );
            }
        });
    });
});
