export default class Autocomplete
{
	constructor( autocomplete )
	{
		this.ac = autocomplete;
		this.acInput = autocomplete.getElementsByTagName( 'input' )[ 0 ];
		this.list = autocomplete.getElementsByClassName( 'text-field__options' )[ 0 ];
		this.items = this.acInput.dataset.items;

		this.addEventListeners()
	}

	addEventListeners()
	{
		this.acInput.addEventListener('input', () => this.search(this.acInput.value));
	}

	search( text )
	{
		let matches = this.items.filter(item =>
		{
			const regex = new RegExp(`${text}`, 'gi');
			return item.value.match(regex) || item.label.match('regex');
		});

		console.log(matches);
	}
}
