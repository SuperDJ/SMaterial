const dialogs = Array.from( document.querySelectorAll( '.dialog' ) );

class Dialog
{
	constructor( dialogs )
	{
		this.dialogs = dialogs;

		this.setRole();
		this.setScroll();
		this.checkId();
	}

	setRole()
	{
		this.dialogs.forEach( dialog =>
		{
			dialog.setAttribute( 'role', 'dialog' );
		});
	}

	setScroll()
	{
		this.dialogs.forEach( dialog =>
		{
			const content = dialog.querySelector('.dialog__content');
			let vertical = content.scrollHeight > content.clientHeight;

			if( vertical )
			{
				dialog.classList.add('dialog--scroll');
			}
		});
	}

	checkId()
	{
		this.dialogs.forEach( ( dialog, i ) =>
		{
			if( !dialog.getAttribute( 'id' ) )
			{
				console.error(`The following dialog doesn't have an ID to trigger it`, dialog);
			}
		});
	}
}

new Dialog( dialogs );