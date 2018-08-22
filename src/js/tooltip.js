const tooltips = document.getElementsByClassName( 'tooltip' );

if( tooltips )
{
    for( let i = 0; i < tooltips.length; i++ )
    {
        let tooltip = tooltips[i];
        let content = tooltip.querySelector( '.tooltip__content' );
        let width = content.getBoundingClientRect().width;
        let id = `tooltip-${i}`;

        // Element triggering tooltip
        let controller = tooltip.childNodes.forEach( controller => {
            if( controller.classList !== undefined && !controller.classList.contains( 'tooltip__content' ) )
            {
                controller.setAttribute( 'aria-describedby', id );
                controller.setAttribute( 'aria-haspopup', true );
            }
        });

        content.setAttribute( 'id', id );
        content.setAttribute( 'role', 'tooltip' );
        content.style.setProperty( '--tooltip-width', `${width}px` );
    }
}
