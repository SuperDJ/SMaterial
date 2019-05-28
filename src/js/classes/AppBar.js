export default class AppBar
{
	constructor( appBar )
	{
		this.appBar = appBar;
		this.container = document.getElementsByClassName('container')[0];

		this.setHeight();
	}

	setHeight()
	{
		[ 'resize', 'load', ].forEach( ( e ) =>
		{
			window.addEventListener( e, () =>
			{
				this.container.style.setProperty( '--app-bar-height', `${this.appBar.getBoundingClientRect().height}px` );
			});
		});
	}
}