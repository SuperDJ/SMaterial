export default class Progress
{
	constructor( progressBar )
	{
		this.progressBar = progressBar;

		this.setRole();
	}

	setRole()
	{
		let progress = this.progressBar.querySelector( '.progress__bar' );

		// If element has a progressbar child
		if( progress )
		{
			this.progressBar.setAttribute( 'aria-valuenow', progress.style.width.replace('%', '') );
		}

		this.progressBar.setAttribute( 'role', 'progressbar' );

		/**
		 * TODO make values dynamic
		 */

		const min = this.progressBar.getAttribute('min') || 0;
		const max = this.progressBar.getAttribute('max') || 100;

		this.progressBar.setAttribute( 'aria-valuemin',  min );
		this.progressBar.setAttribute( 'aria-valuemax', max );
	}
}