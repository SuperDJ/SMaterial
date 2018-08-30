const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

headings.forEach( heading => {
    let headers = Array.from( document.querySelectorAll( `${heading}, .${heading}`) ); // Select h1, .h1 etc.

    headers.forEach( header => {
        header.setAttribute( 'role', 'heading' );
    });
});
