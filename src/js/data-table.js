export default class DataTable
{
	constructor( dataTable )
	{
		this.dataTable = dataTable;
		this.rows = this.dataTable.getElementsByTagName( 'tr' );
		this.headers = this.dataTable.getElementsByTagName( 'th' );

		this.setRole();
		this.renderHtml();
	}

	setRole()
	{
		this.dataTable.setAttribute( 'role', 'table' );

		for( let row of this.rows )
		{
			row.setAttribute( 'role', 'row' );
		}

		for( let header of this.headers )
		{
			header.setAttribute( 'role', 'columnheader' );
		}
	}

	renderHtml()
	{
		let container = document.createElement( 'div' );
		this.dataTable.parentNode.insertBefore( container, this.dataTable );
		container.classList.add( 'data-table--responsive' );
		container.appendChild( this.dataTable );
	}
}