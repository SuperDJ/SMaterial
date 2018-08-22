const dataTables = document.getElementsByClassName( 'data-table' );

if( dataTables )
{
    for( let i = 0; i < dataTables.length; i ++ )
    {
        let dataTable = dataTables[i];

        dataTable.setAttribute( 'role', 'table');

        const rows = dataTable.querySelectorAll( 'tr' );
        const columnheaders = dataTable.querySelectorAll( 'th' );

        for( let i = 0; i < rows.length; i++ )
        {
            let row = rows[i];
            row.setAttribute( 'role', 'row' );
        }

        for( let i = 0; i < columnheaders.length; i++ )
        {
            let columnheader = columnheaders[i];
            columnheader.setAttribute( 'role', 'columnheader' );
        }

        let container = document.createElement( 'div' );
        dataTable.parentNode.insertBefore( container, dataTable );
        container.classList.add( 'data-table--responsive' );
        container.appendChild(dataTable);
    }
}
