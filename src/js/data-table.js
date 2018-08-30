const dataTables = Array.from( document.querySelectorAll( '.data-table' ));

dataTables.forEach( dataTable => {
    dataTable.setAttribute( 'role', 'table');

    const rows = Array.from( dataTable.querySelectorAll( 'tr' ) );
    rows.forEach( row => {
        row.setAttribute( 'role', 'row' );
    });

    const columnHeaders = dataTable.querySelectorAll( 'th' );
    columnHeaders.forEach( columnHeader => {
        columnHeader.setAttribute( 'role', 'columnheader' );
    });

    let container = document.createElement( 'div' );
    dataTable.parentNode.insertBefore( container, dataTable );
    container.classList.add( 'data-table--responsive' );
    container.appendChild(dataTable);
});
