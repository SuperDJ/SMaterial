const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

headings.forEach( heading => {
    let headers = document.getElementsByClassName( heading );

    if( headers )
    {
        for( let i = 0; i < headers.length; i++ )
        {
            let header = headers[i];
            header.setAttribute( 'role', 'heading' );
        }
    }
});
