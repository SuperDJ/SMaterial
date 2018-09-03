const dialogs = Array.from( document.querySelectorAll( '.dialog' ) );

class Dialog
{
	constructor( dialogs )
	{
		this.dialogs = dialogs;

		this.setRole();
		this.setScroll();
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
		this.dialogs.forEach(dialog =>
		{
			const content = dialog.querySelector('.dialog__content');
			let vertical = content.scrollHeight > content.clientHeight;

			if( vertical )
			{
				dialog.classList.add('dialog--scroll');
			}
		});
	}
}

new Dialog( dialogs );