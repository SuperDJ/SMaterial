const selectFields = document.getElementsByClassName( 'select-field' );

if( selectFields )
{
    for( let i = 0; i < selectFields.length; i++ )
    {
        let selectField = selectFields[i];
        let select = selectField.getElementsByTagName( 'select' )[0];
        let name = select.getAttribute('name');
        let options = select.getElementsByTagName( 'option' );

        // Generate HTML
        let html = '<div class="select-field__options">';

        for( let j = 0; j < options.length; j++ )
        {
            let option = options[j];
            html += `   <div class="select-field__option">
                            <input type="radio" value="${option.value}" name="${name}" id="${name}-${j}">
                            <label for="${name}-${j}">${option.innerHTML}</label>
                        </div>`;

        }

        html += '</div>';

        // Add HTML to DOM
        selectField.insertAdjacentHTML( 'afterbegin', html );

        // Open/ close select-field__options
        let fieldOptions = selectField.querySelector( '.select-field__options' );
        let fieldOptionsHeight = fieldOptions.getBoundingClientRect().height;

        fieldOptions.style.maxHeight = 0;

        selectField.addEventListener( 'click', () => {
            if( fieldOptions.classList.contains( 'active' ) )
            {
                fieldOptions.style.maxHeight = 0;
                fieldOptions.classList.remove( 'active' );
            } else {
                fieldOptions.style.maxHeight = `${fieldOptionsHeight}px`;
                fieldOptions.classList.add( 'active' );
            }
        });
    }
}
