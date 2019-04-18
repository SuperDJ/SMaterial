export default class Menu
{
	constructor( menu )
	{
		this.menu = menu;

		this.addMutationObserver();
	}

	addMutationObserver()
	{
		let observer = new MutationObserver(  mutations =>
		{
			mutations.forEach( ( mutation ) =>
			{
				if( mutation.attributeName === 'class' )
				{
					let attributeValue = document.getElementById( mutation.target.id ).getAttribute( mutation.attributeName );

					if( attributeValue.indexOf('active') > -1 )
					{
						this.menu.style.maxWidth = `100vw`;
						this.menu.style.maxHeight = `100vh`;
					}
					else
					{
						this.menu.style.maxWidth = 0;
						this.menu.style.maxHeight = 0;
					}
				}
			});
		});

		observer.observe( this.menu, {
			attributes: true,
		});
	}
}