export default class SelectField
{
	constructor( selectField )
	{
		this.selectField = selectField;
		this.select = this.selectField.querySelector( 'select' );
		this.name = this.select.getAttribute( 'name' );
		this.options = this.select.getElementsByTagName( 'option' );
		this.multiple = this.select.multiple;

		this.renderHTML();
		this.openOptions();
		this.setValue();
	}

	renderHTML()
	{
		let html = '<div class="select-field__input"></div><div class="select-field__options">';
		let i = 0;

		for( let option of this.options )
		{
			html += `   
   				<div class="select-field__option">
					<input type="${this.multiple ? 'checkbox' : 'radio' }" value="${option.value}" name="${this.name}" id="${this.name}-${i}" checked="${option.checked}">
					<label for="${this.name}-${i}">${option.innerHTML}</label>
				</div>
			`;
			i++;
		}

		html += '</div>';

		this.selectField.insertAdjacentHTML( 'afterbegin', html );
	}

	openOptions()
	{
		let selectFieldOptions = this.selectField.querySelector( '.select-field__options' );
		let selectFieldOptionsHeight = selectFieldOptions.getBoundingClientRect().height;

		selectFieldOptions.style.maxHeight = 0;

		this.selectField.addEventListener( 'click', () =>
		{
			if( selectFieldOptions.classList.contains( 'active' ) )
			{
				selectFieldOptions.style.maxHeight = 0;
				selectFieldOptions.classList.remove( 'active' );
			}
			else
			{
				selectFieldOptions.style.maxHeight = `${selectFieldOptionsHeight}px`;
				selectFieldOptions.classList.add( 'active' );
			}
		});
	}

	setValue()
	{
		let selectFieldOptions = this.selectField.querySelector( '.select-field__options' );
		let selectFieldOptionsInputs = Array.from( selectFieldOptions.querySelectorAll( 'input' ) );
		let selectFieldInput = this.selectField.querySelector( '.select-field__input' );
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

					selectFieldInput.innerHTML = inner.join();
					this.select.value = value;
				}
				else
				{
		 			selectFieldInput.innerHTML = selected[0].inner;
		 			this.select.value = selected[0].value;
		 			this.selectField.click();
				}
			});
		}
	}
}