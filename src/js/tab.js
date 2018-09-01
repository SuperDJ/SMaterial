const tabBars = Array.from( document.querySelectorAll( '.tabs' ) );

class TabBar
{
	constructor( tabBars )
	{
		this.tabBars = tabBars;

		this.setRole();
	}

	setRole()
	{
		this.tabBars.forEach( tabBar =>
		{
			tabBar.setAttribute( 'role', 'tablist' );

			// Tabs
			Array.from( tabBar.querySelectorAll( '.tabs__tab' ) ).forEach( tab =>
			{
				tab.setAttribute( 'role', 'tab' );
			});
		});
	}
}

new TabBar( tabBars );