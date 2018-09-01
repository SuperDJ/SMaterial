const selectFields = Array.from( document.querySelectorAll( '.select-field' ) );

selectFields.forEach( selectField =>
{
	let select = selectField.querySelector( 'select' );
	let name = select.getAttribute('name');
	let selectOptions = Array.from( select.querySelectorAll( 'option' ) );

	/**********************************
     * Add HTML to DOM
     **********************************/
	let html = '<div class="select-field__text"></div><div class="select-field__options">';

	selectOptions.forEach( ( selectOption, i ) =>
	{
		html += `   <div class="select-field__option">
                        <input type="radio" value="${selectOption.value}" name="${name}" id="${name}-${i}">
                        <label for="${name}-${i}">${selectOption.innerHTML}</label>
                    </div>`;
	});

	html += '</div>';

	selectField.insertAdjacentHTML( 'afterbegin', html );

	/**********************************
     * Open/ close select-field__options
     **********************************/
	let selectFieldOptions = selectField.querySelector( '.select-field__options' );
	let selectFieldText = selectField.querySelector( '.select-field__text' );
	let selectFieldOptionsHeight = selectFieldOptions.getBoundingClientRect().height;

	selectFieldOptions.style.maxHeight = 0;

	selectField.addEventListener( 'click', () =>
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

	/**********************************
     * Set value in select/ close options
     **********************************/
	let selectFieldOptionsInputs = Array.from( selectFieldOptions.querySelectorAll( 'input' ) );

	selectFieldOptionsInputs.forEach( ( selectFieldOptionsInput, i ) =>
	{
		const type = selectFieldOptionsInput.getAttribute( 'type' );
		selectFieldOptionsInput.addEventListener( 'click', () =>
		{

			if( type === 'radio' )
			{
				select.value = selectFieldOptionsInput.value;
				selectFieldText.innerText = selectOptions[i].innerHTML;

				selectFieldOptions.click();
			}

			if( type === 'checkbox' )
			{

			}
		});
	});
});
