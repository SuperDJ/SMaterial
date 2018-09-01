const menus = Array.from( document.querySelectorAll( '.menu' ) );

menus.forEach( menu =>
{
	let style = menu.getBoundingClientRect();
	let width = style.width;
	let height = style.height;

	menu.style.maxWidth = 0;
	menu.style.maxHeight = 0;

	let observer = new MutationObserver( ( mutations ) =>
	{
		mutations.forEach( ( mutation ) =>
		{
			if( mutation.attributeName === 'class' )
			{
				let attributeValue = document.getElementById( mutation.target.id ).getAttribute( mutation.attributeName );

				if( attributeValue.indexOf('active') > -1 )
				{
					menu.style.maxWidth = `${width}px`;
					menu.style.maxHeight = `${height}px`;
				}
				else
				{
					menu.style.maxWidth = 0;
					menu.style.maxHeight = 0;
				}
			}
		});
	});
	observer.observe( menu, {
		attributes: true,
	});
	/*
     Menu.addEventListener( 'active', () => {
     console.log(1);
     menu.style.setProperty( '--menu-max-width', `${width}px`);
     menu.style.setProperty( '--menu-max-height', `${height}px` );
     });

     menu.addEventListener( 'inactive', () => {
     console.log(2);
     menu.style.setProperty( '--menu-max-width', 0 );
     menu.style.setProperty( '--menu-max-height', 0 );
     });*/
});
