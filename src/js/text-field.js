const textFields = document.getElementsByClassName( 'text-field__input' );

if( textFields )
{
    for( let i = 0; i < textFields.length; i++ )
    {
        let textField = textFields[i];
        let value = textField.value;
        let container = textField.parentElement;

        if( !container )
        {
            console.error('Input does not have a container');
        }

        value !== '' && value.length > 0 ? container.classList.add( 'text-field--active' ) : container.classList.remove( 'text-field--active' );

        textField.addEventListener( 'focus', () => {
            container.classList.add( 'text-field--focus' );
        });

        textField.addEventListener( 'blur', () => {
            container.classList.remove( 'text-field--focus' );
        });

        textField.addEventListener( 'input', () => {
            value = textField.value;

            if( value !== '' && value.length > 0 )
            {
                container.classList.add( 'text-field--active' );
            } else {
                container.classList.remove( 'text-field--active' );
            }
        });
    }
}
