const tabBars = document.getElementsByClassName( 'tabs' );

class TabBar
{
	constructor( tabBar )
	{
		this.tabBar = tabBar;

		this.setRole();
	}

	setRole()
	{
			this.tabBar.setAttribute( 'role', 'tablist' );

			// Tabs
			Array.from( this.tabBar.querySelectorAll( '.tabs__tab' ) ).forEach( tab =>
			{
				tab.setAttribute( 'role', 'tab' );
			});
	}
}

for( let tabBar of tabBars )
{
	new TabBar( tabBar );
}