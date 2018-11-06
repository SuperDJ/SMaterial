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

		const min = this.progressBar.getAttribute('min');
		const max = this.progressBar.getAttribute('max');

		this.progressBar.setAttribute( 'aria-valuemin',  min ? min : 0 );
		this.progressBar.setAttribute( 'aria-valuemax', max ? max : 100 );
	}
}