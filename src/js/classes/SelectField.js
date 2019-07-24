export default class SelectField
{
	constructor( selectField )
	{
		this.selectField = selectField;
		this.select = this.selectField.querySelector( 'select' );
		this.name = this.select.getAttribute( 'name' );
		this.options = this.select.getElementsByTagName( 'option' );
		this.multiple = this.select.multiple;
		this.selectFieldInput = this.selectField.getElementsByClassName('text-field__input')[0];
		this.selectFieldOptions = null;

		this.renderHTML();
		this.openOptions();
		this.setCurrentValue();
		this.setValue();
	}

	renderHTML()
	{
		let html = '<div class="text-field__options">';
		let i = 0;

		for( let option of this.options )
		{
			html += `   
   				<div class="text-field__option">
					<input type="${this.multiple ? 'checkbox' : 'radio' }" value="${option.value}" name="${this.name}" id="${this.name}-${i}">
					<label for="${this.name}-${i}">${option.innerHTML}</label>
				</div>
			`;
			i++;
		}

		html += '</div>';

		this.selectField.insertAdjacentHTML( 'beforeend', html );
		this.selectFieldOptions = this.selectField.querySelector( '.text-field__options' );
	}

	setCurrentValue()
	{
		let selectedOptions = this.select.selectedOptions;
		let inputs = Array.from( this.selectFieldOptions.querySelectorAll( 'input' ) );
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

		this.selectFieldInput.innerHTML = inputValue;
	}

	openOptions()
	{
		let selectFieldOptionsHeight = this.selectFieldOptions.getBoundingClientRect().height;

		this.selectFieldOptions.style.maxHeight = 0;

		this.selectField.addEventListener( 'click', () =>
		{
			if( this.selectFieldOptions.classList.contains( 'active' ) )
			{
				this.selectFieldOptions.style.maxHeight = 0;
				this.selectFieldOptions.classList.remove( 'active' );
			}
			else
			{
				this.selectFieldOptions.style.maxHeight = `100vh`;
				this.selectFieldOptions.classList.add( 'active' );
			}
		});
	}

	setValue()
	{
		let selectFieldOptionsInputs = Array.from( this.selectFieldOptions.querySelectorAll( 'input' ) );
		let inner = [];
		let value = [];

		for( let selectFieldOptionsInput of selectFieldOptionsInputs )
		{
			selectFieldOptionsInput.addEventListener( 'click', ( ) =>
			{
				let selected = selectFieldOptionsInputs
					.filter( input => input.checked )
					.map( input =>
					{
						return{ inner: input.parentElement.querySelector( 'label' ).innerText, value: input.value, };
					});

		 		if( this.multiple )
				{
					inner = [];
					value = [];
					selected.forEach( select =>
					{
						inner.push( select.inner );
						value.push( select.value );
					});

					this.selectFieldInput.innerHTML = inner.join();
					this.select.value = value;
				}
				else
				{
		 			this.selectFieldInput.innerHTML = selected[0].inner;
		 			this.select.value = selected[0].value;
		 			this.selectField.click();
				}
			});
		}
	}
}