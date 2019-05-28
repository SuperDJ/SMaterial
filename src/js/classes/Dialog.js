export default class Dialog
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

		this.checkScroll();
		window.addEventListener('resize', () => this.checkScroll());
	}

	checkScroll()
	{
		let content = this.dialog.querySelector( '.dialog__content' );
		let vertical = content.scrollHeight > content.offsetHeight;
		console.log( vertical, content.scrollHeight, content.offsetHeight );

		if( vertical )
		{
			this.dialog.classList.add( 'dialog--scroll' );
		}
		else
		{
			this.dialog.classList.remove( 'dialog--scroll' )
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