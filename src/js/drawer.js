const drawers = document.getElementsByClassName( 'drawer' );

if( drawers )
{
    for( let i = 0 ; i < drawers.length; i++ )
    {
        let drawer = drawers[i];
        let parents = drawer.querySelectorAll( '.drawer__item__parent' );
        let children = drawer.querySelectorAll( '.drawer__item__children' );

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
    }
}
