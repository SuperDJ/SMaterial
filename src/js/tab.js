const tabBars = document.getElementsByClassName( 'tabs' );

if( tabBars )
{
    for( let i = 0; i < tabBars.length; i++ )
    {
        let tabBar = tabBars[i];

        tabBar.setAttribute( 'role', 'tablist' );

        let tabs = tabBar.getElementsByClassName( 'tabs__tab' );

        if( tabs )
        {
            for( let j = 0; j < tabs.length; j++ )
            {
                let tab = tabs[j];

                tab.setAttribute( 'role', 'tab' );
            }
        }
    }
}

/**************************************
 * TODO add aria
 **************************************/
