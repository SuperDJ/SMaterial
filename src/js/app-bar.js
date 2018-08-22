const appBars = document.getElementsByClassName( 'app-bar' );
let container = document.getElementsByClassName( 'container' )[0];

if( appBars )
{
    for( let i = 0; i < appBars.length; i++ )
    {
        let appBar = appBars[i];

        ['resize', 'load'].forEach( ( e ) => {
            window.addEventListener( e, function () {
                let height = appBar.getBoundingClientRect().height;
                container.style.setProperty( '--app-bar-height', `${height}px` );
            });
        });

        /*
         TODO turn back on when browser support is better
         new ResizeObserver( () => {
         let height = appBar.getBoundingClientRect().height;
         container.style.setProperty( '--app-bar-height', `${height}px` );
         }).observe(appBar);
         */
    }
}
