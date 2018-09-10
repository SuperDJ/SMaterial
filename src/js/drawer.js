const drawers = Array.from( document.querySelectorAll( '.drawer' ) );

drawers.forEach( drawer =>
{
	let parents = drawer.querySelectorAll( '.drawer__item__parent' );

	parents.forEach( parent =>
	{
		let child = parent.nextElementSibling;
		let height = child.getBoundingClientRect().height;

		child.style.maxHeight = 0;
		//Child.style.display = 'none';

		parent.addEventListener( 'click', () =>
		{
			if( child.classList.contains( 'active' ) )
			{
				child.style.maxHeight = 0;
				child.classList.remove( 'active' );
				//Child.style.display = 'none';
			}
			else
			{
				//Child.style.display = 'block';
				child.style.maxHeight = `${height}px`;
				child.classList.add( 'active' );
			}
		});
	});
});

/**************************************
 * Auto open parent
 **************************************/

const drawerItemChildren = Array.from( document.querySelectorAll( '.drawer__item__children' ) );
const drawerItemActive = document.querySelector( '.drawer__item--active' );

drawerItemChildren.forEach( child =>
{
	if( child.contains( drawerItemActive ) )
	{
		child.classList.add('active');
		child.style.maxHeight = 'unset';
		child.style.display = 'block';
	}
});
