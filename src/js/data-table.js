const dataTables = Array.from( document.querySelectorAll( '.data-table' ));

class DataTable
{
	constructor( dataTables )
	{
		this.dataTables = dataTables;

		this.setRole();
		this.renderHtml();
	}

	setRole()
	{
		this.dataTables.forEach( dataTable =>
		{
			dataTable.setAttribute( 'role', 'table' );

			// Rows
			Array.from( dataTable.querySelectorAll( 'tr' ) ).forEach( row =>
			{
				row.setAttribute( 'role', 'row' );
			});

			// Column headers
			Array.from( dataTable.querySelectorAll( 'th' ) ).forEach( columnHeader =>
			{
				columnHeader.setAttribute( 'role', 'columnheader' );
			});
		});
	}

	renderHtml()
	{
		this.dataTables.forEach( dataTable =>
		{
			let container = document.createElement( 'div' );
			dataTable.parentNode.insertBefore( container, dataTable );
			container.classList.add( 'data-table--responsive' );
			container.appendChild( dataTable );
		});
	}
}

new DataTable( dataTables );