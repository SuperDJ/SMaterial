export default class DataList
{
	constructor( dataList )
	{
		this.dataList = dataList;
		this.options = document.getElementById( this.dataList.getAttribute( 'list' ) ).getElementsByTagName( 'option' );
		this.name = this.dataList.getAttribute( 'name' );
		this.dataListInput = this.dataList.getElementsByClassName( 'text-field__input' )[ 0 ];
		this.dataListOptions = null;

		this.renderHTML();
		this.openOptions();
		this.setCurrentValue();
		this.setValue();
	}

	renderHTML()
	{
		let html = '<div class="text-field__options">';
		let i = 0;

		console.log( this.options );

		for( let option of this.options )
		{
			let label = option.innerHTML.trim().lenght > 0 ? option.innerHTML : option.value;
			html += `
   				<div class="text-field__option">
					<input type="checkbox" value="${option.value}" name="${this.name}" id="${this.name}-${i}">
					<label for="${this.name}-${i}">${label}</label>
				</div>
			`;
			i++;
		}

		html += '</div>';

		this.dataList.insertAdjacentHTML( 'beforeend', html );
		this.dataListOptions = this.dataList.querySelector( '.text-field__options' );
	}

	setCurrentValue()
	{
		/*Console.log(this.options);
		let selectedOptions = this.dataList.selectedOptions;
		let inputs = Array.from( this.dataListOptions.querySelectorAll( 'input' ) );
		let inputValue = '';
		let i = 0;

		for( let selectedOption of selectedOptions )
		{
			inputs[ selectedOption.index ].checked = true;

			if( selectedOptions.length > 1 )
			{
				inputValue += i === 0 ? selectedOption.innerHTML : `,${selectedOption.innerHTML}`;
				i++;
			}
			else
			{
				inputValue += selectedOption.innerHTML;
			}
		}

		this.dataListInput.innerHTML = inputValue;*/
	}

	openOptions()
	{
		this.dataListOptions.style.maxHeight = 0;

		this.dataList.addEventListener( 'click', e =>
		{
			e.preventDefault();

			if( this.dataListOptions.classList.contains( 'active' ) )
			{
				this.dataListOptions.style.maxHeight = 0;
				this.dataListOptions.classList.remove( 'active' );
			}
			else
			{
				this.dataListOptions.style.maxHeight = `100vh`;
				this.dataListOptions.classList.add( 'active' );
			}
		});
	}

	setValue()
	{
		let dataListOptionsInputs = Array.from( this.dataListOptions.querySelectorAll( 'input' ) );
		let inner = [];
		let value = [];

		for( let dataListOptionsInput of dataListOptionsInputs )
		{
			dataListOptionsInput.addEventListener( 'click', ( ) =>
			{
				let selected = dataListOptionsInputs
					.filter( input => input.checked )
					.map( input =>
					{
						return{ inner: input.parentElement.querySelector( 'label' ).innerText, value: input.value, };
					});

				this.dataListInput.innerHTML = selected[0].inner;
				this.dataList.value = selected[0].value;
				this.dataList.click();
			});
		}
	}
}
