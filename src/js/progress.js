const progressBars = document.getElementsByClassName( 'progress' );

if( progressBars )
{
    for( let i = 0; i < progressBars.length; i++ )
    {
        let progressBar = progressBars[i];
        let progressBarWidth = progressBar.getBoundingClientRect().width;
        let progress = progressBar.querySelector( '.progress__bar' );

        console.log(progressBar.tagName);

        // If element has a progressbar child
        if( progress )
        {
            progressBar.setAttribute( 'aria-valuenow', progress.style.width.replace('%', '') );
        }

        progressBar.setAttribute( 'role', 'progressbar' );
        progressBar.setAttribute( 'aria-valuemin', '0' );
        progressBar.setAttribute( 'aria-valuemax', '100' );
    }
}
