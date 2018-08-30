const tabBars = Array.from( document.querySelectorAll( '.tabs' ) );

tabBars.forEach( tabBar => {
    tabBar.setAttribute( 'role', 'tablist' );

    let tabs = Array.from( tabBar.querySelectorAll( '.tabs__tab' ) );

    tabs.forEach( tab => {
        tab.setAttribute( 'role', 'tab' );
    });
});

/**************************************
 * TODO add aria
 **************************************/
