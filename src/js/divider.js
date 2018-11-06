export default class Divider
{
	constructor( divider )
	{
		this.divider = divider;

		this.setRole();
		this.setOrientation();
		this.checkWidth();
	}

	setRole()
	{
		this.divider.setAttribute( 'role', 'separator' );
	}

	setOrientation()
	{
		const orientation = this.divider.classList.contains( 'divider--vertical' ) ? 'vertical' : 'horizontal';
		this.divider.setAttribute( 'aria-orientation', orientation );
	}

	checkWidth()
	{
		const orientation = this.divider.classList.contains( 'divider--vertical' ) ? 'vertical' : 'horizontal';

		if( orientation === 'vertical' )
		{
			let parent = this.divider.parentElement;
			this.divider.style.setProperty('width', `${parent.getBoundingClientRect().height}px`);
		}
	}
}
