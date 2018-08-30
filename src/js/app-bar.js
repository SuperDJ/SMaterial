const appBars = Array.from( document.querySelectorAll( '.app-bar' ) );
let container = document.querySelecotr( '.container' );

appBars.forEach( appBar => {
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
});
