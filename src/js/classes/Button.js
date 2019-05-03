export default class Button
{
	constructor( button )
	{
		this.button = button;

		this.setRole();
	}

	setRole()
	{
		this.button.setAttribute('role', 'button');
	}
}