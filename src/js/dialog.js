const dialogs = document.getElementsByClassName( 'dialog' );

class Dialog
{
	constructor( dialog )
	{
		this.dialog = dialog;

		this.setRole();
		this.setScroll();
		this.checkId();
	}

	setRole()
	{
		this.dialog.setAttribute( 'role', 'dialog' );
	}

	setScroll()
	{

		const content = this.dialog.querySelector('.dialog__content');
		let vertical = content.scrollHeight > content.clientHeight;

		if( vertical )
		{
			this.dialog.classList.add('dialog--scroll');
		}
	}

	checkId()
	{

		if( !this.dialog.getAttribute( 'id' ) )
		{
			console.error( `The following dialog doesn't have an ID to trigger it`, this.dialog );
		}
	}
}

for( let dialog of dialogs )
{
	new Dialog( dialog );
}