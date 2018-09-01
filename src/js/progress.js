const progressBars = Array.from( document.querySelectorAll( '.progress' ) );

class Progress
{
	constructor( progressBars )
	{
		this.progressBars = progressBars;

		this.setRole();
	}

	setRole()
	{
		this.progressBars.forEach( progressBar =>
		{
			let progress = progressBar.querySelector( '.progress__bar' );

			// If element has a progressbar child
			if( progress )
			{
				progressBar.setAttribute( 'aria-valuenow', progress.style.width.replace('%', '') );
			}

			progressBar.setAttribute( 'role', 'progressbar' );

			/**
			 * TODO make values dynamic
			 */
			progressBar.setAttribute( 'aria-valuemin', '0' );
			progressBar.setAttribute( 'aria-valuemax', '100' );
		});
	}
}

new Progress( progressBars );