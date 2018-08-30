const progressBars = Array.from( document.querySelectorAll( '.progress' ) );

progressBars.forEach( progressBar => {
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
});
