const sliders = Array.from( document.querySelectorAll( '.slider' ) );

sliders.forEach( ( slider, i ) =>
{
	let value = slider.value || 50;
	let min = slider.getAttribute( 'min' ) || 0;
	let max = slider.getAttribute( 'max' ) || 100;

	slider.style.setProperty( '--slider-min', min );
	slider.style.setProperty( '--slider-max', max );
	slider.style.setProperty( '--slider-value', value );

	let html = `
		<div class="slider__container">
			${slider.classList.contains( 'slider--discrete' ) ? '<div class="slider__label"></div>' : ''}
			${slider.outerHTML}
	`;

	html += `
		<div class="slider__track-before"></div>
		</div>
	`;

	slider.outerHTML = html;

	slider = document.querySelectorAll( '.slider' )[i];

	slider.addEventListener( 'input', () =>
	{
		let percentage = ( slider.value / (max - min) ) * 100;
		const before = slider.parentElement.querySelector( '.slider__track-before' );

		before.style.width = `${percentage}%`;

		if( slider.classList.contains( 'slider--discrete' ) )
		{
			const label = slider.parentElement.querySelector( '.slider__label' );
			let labelWidth = label.getBoundingClientRect().width;
			label.innerText = slider.value;

			label.style.left = `calc(${percentage}% - ${(labelWidth / 2)}px)`;
		}
	});
});