export default class Slider
{
	constructor( slider )
	{
		this.slider = slider;
		this.value = this.slider.value || 50;
		this.min = this.slider.getAttribute('min') || 0;
		this.max = this.slider.getAttribute('max') || 100;

		this.setProperties();
		this.renderHTML();
		this.event();
	}

	setProperties()
	{
		this.slider.style.setProperty( '--slider-min', this.min );
		this.slider.style.setProperty( '--slider-max', this.max );
		this.slider.style.setProperty( '--slider-value', this.value );
	}

	renderHTML()
	{
		let html = `
			<div class="slider__container">
				${this.slider.classList.contains( 'slider--discrete' ) ? '<div class="slider__label"></div>' : ''}
				<div class="slider__track-before"></div>
			</div>
		`;

		// Create new container
		this.slider.insertAdjacentHTML( 'afterEnd', html );

		// Select container
		let container = this.slider.nextElementSibling;

		// Place input in container
		container.appendChild(this.slider);

		// Add new class
		this.slider.classList.toggle( 'slider__input' );

		// Replace slider selector
		this.slider = container.getElementsByClassName( 'slider__input' )[0];

		// Remove slider class
		this.slider.classList.remove( 'slider' );

		// Make container the slider
		container.classList.toggle('slider');
		container.classList.toggle('slider__container');

		// Check if input is disabled
		if( this.slider.disabled )
		{
			container.classList.add( 'slider--disabled' );
		}
	}

	event()
	{
		this.slider.addEventListener( 'input', () =>
		{
			let percentage = ( this.slider.value / (this.max - this.min) ) * 100;
			const before = this.slider.parentElement.querySelector( '.slider__track-before' );

			before.style.width = `${percentage}%`;

			if( this.slider.classList.contains( 'slider--discrete' ) )
			{
				const label = this.slider.parentElement.querySelector( '.slider__label' );
				let labelWidth = label.getBoundingClientRect().width;
				label.innerText = this.slider.value;

				label.style.left = `calc(${percentage}% - ${(labelWidth / 2)}px)`;
			}
		});
	}
}