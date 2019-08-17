export default class Drawer
{
	constructor( drawer )
	{
		this.drawer = drawer;
		this.parents = drawer.getElementsByClassName( 'drawer__item__parent' );

		this.parentEvent();
		this.openParent();
	}

	parentEvent()
	{
		for( let parent of this.parents )
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
					child.style.maxHeight = `100%`;
					child.classList.add( 'active' );
				}
			});
		}
	}

	openParent()
	{
		const children = this.drawer.getElementsByClassName( 'drawer__item__children' );
		const active = this.drawer.getElementsByClassName( 'drawer__item--active' )[0];

		for( let child of children )
		{
			if( child.contains( active ) )
			{
				child.classList.add('active');
				child.style.maxHeight = 'unset';
				child.style.display = 'block';
			}
		}
	}
}
