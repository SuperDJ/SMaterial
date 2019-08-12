export default class Picker
{
	constructor( picker, options )
	{
		this.picker = picker;
		this.options = options;
		this.date = new Date();
		this.month = this.date.getMonth();
		this.year = this.date.getFullYear();

		this.generateCalendar( this.month, this.year );
		this.setSelectedDate(this.month);
		this.bindActions();
	}

	generateCalendar( month, year )
	{
		if( this.options.days.length !== 7 )
		{
			console.warn( `There need to be 7 days and not: ${this.options.days.length}` );
			return;
		}

		if( this.options.months.length !== 12 )
		{
			console.warn( `There need to be 12 months and not: ${this.options.months.length}` );
			return;
		}

		let container = this.picker.querySelector( '.picker__calendar' );
		let firstDay = new Date( year, month ).getDay();
		let daysInMonth = 32 - new Date( year, month, 32 ).getDate();

		// Create the first elements
		let calendar = document.createElement( 'table' );
		let calendarHeader = document.createElement( 'thead' );
		let calendarHeaderRow = document.createElement( 'tr' );

		// Add days
		this.options.days.forEach( day =>
		{
			let text = document.createTextNode( day[ 0 ] );
			let cell = document.createElement( 'th' );
			cell.appendChild( text );
			calendarHeaderRow.appendChild( cell );
		} );

		calendarHeader.appendChild( calendarHeaderRow );
		calendar.appendChild( calendarHeader );

		// Create the calendar
		let date = 1;

		//  Creating all weeks
		for( let w = 0; w < 5; w++ )
		{
			let row = document.createElement( 'tr' );

			// Creating all days
			for( let d = 0; d < 7; d++ )
			{
				if( date > daysInMonth )
				{
					break;
				}

				let cell = document.createElement( 'td' );
				let cellText = null;

				if( w === 0 && d < firstDay )
				{
					cellText = document.createTextNode( '' );
					cell.appendChild( cellText );
				}
				else
				{
					cellText = document.createTextNode( date );

					if( date === this.date.getDate() && year === this.date.getFullYear() && month === this.date.getMonth() )
					{
						let container = document.createElement( 'div' );
						container.classList.add( 'picker--current-date' );
						container.appendChild( cellText );
						cell.appendChild( container );
					}
					else
					{
						cell.appendChild( cellText );
					}

					date++;
				}

				row.appendChild( cell );
			}
			calendar.appendChild( row );
		}

		console.log(container.hasChildNodes());

		container.replaceChild( calendar, container.childNodes[0]); // Generate the calendar
	}

	setSelectedDate(month)
	{
		this.picker.querySelector('.picker__selected-date').innerText = `${this.options.days[1]}, ${this.options.months[month].substr(0, 3)} ${this.date.getDate()}`;
	}

	setSelectedMonthYear(month, year)
	{
		this.picker.querySelector('.picker__year').innerText = `${this.options.months[month]} ${year}`;
	}

	nextMonth()
	{
		this.year = (this.month === 11) ? this.year + 1 : this.year;
		this.month = (this.month + 1) % 12;
		this.generateCalendar(this.month, this.year);
		this.setSelectedMonthYear(this.month, this.year);
	}

	previousMonth()
	{
		this.year = (this.month === 0) ? this.year - 1 : this.year;
		this.month = (this.month === 0) ? 11 : this.month - 1;
		this.generateCalendar(this.month, this.year);
		this.setSelectedMonthYear(this.month, this.year);
	}

	bindActions()
	{
		this.picker.querySelector('.picker__prev-month').addEventListener('click', () =>
		{
			this.previousMonth();
		});

		this.picker.querySelector('.picker__next-month').addEventListener('click', () =>
		{
			this.nextMonth();
		});
	}
}
