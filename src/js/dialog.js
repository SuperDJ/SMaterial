const dialogs = Array.from( document.querySelectorAll( '.dialog' ) );

class Dialog
{
	constructor( dialogs )
	{
		this.dialogs = dialogs;

		this.setRole();
	}

	setRole()
	{
		this.dialogs.forEach( dialog =>
		{
			dialog.setAttribute( 'role', 'dialog' );
		});
	}
}

new Dialog( dialogs );