/**************************************
 * App bar
 **************************************/

const appBars = document.getElementsByClassName( 'app-bar' );
let container = document.getElementsByClassName( 'container' )[0];

if( appBars )
{
	for( let i = 0; i < appBars.length; i++ )
	{
		let appBar = appBars[i];

		['resize', 'load'].forEach( ( e ) => {
			window.addEventListener( e, function () {
				let height = appBar.getBoundingClientRect().height;
				container.style.setProperty( '--app-bar-height', `${height}px` );
			});
		});

		/*
		TODO turn back on when browser support is better
		new ResizeObserver( () => {
			let height = appBar.getBoundingClientRect().height;
			container.style.setProperty( '--app-bar-height', `${height}px` );
		}).observe(appBar);
		*/
	}
}

/**************************************
 * Banners
 */

const banners = document.getElementsByClassName( 'banner' );

if( banners )
{
	for( let i = 0; i < banners.length; i++ )
	{
		let banner = banners[i];

		// Set role
		banner.setAttribute( 'role', 'banner' );
	}
}

/**************************************
* Buttons
/**************************************/

const buttons = document.getElementsByClassName( 'button' );

if( buttons )
{
	for( let i = 0; i < buttons.length; i++ )
	{
		let button = buttons[i];

		// Set role
		button.setAttribute('role', 'button');

		button.addEventListener( 'click', e => {
			let rect = e.target.getBoundingClientRect(),
			x = Math.ceil( e.clientX - rect.left ),
			y = Math.ceil( e.clientY - rect.top );

			console.log(x, y);
		});
	}
}

/**************************************
* Data tables
**************************************/

const dataTables = document.getElementsByClassName( 'data-table' );

if( dataTables )
{
	for( let i = 0; i < dataTables.length; i ++ )
	{
		let dataTable = dataTables[i];

		dataTable.setAttribute( 'role', 'table');

		const rows = dataTable.querySelectorAll( 'tr' );
		const columnheaders = dataTable.querySelectorAll( 'th' );

		for( let i = 0; i < rows.length; i++ )
		{
			let row = rows[i];
			row.setAttribute( 'role', 'row' );
		}

		for( let i = 0; i < columnheaders.length; i++ )
		{
			let columnheader = columnheaders[i];
			columnheader.setAttribute( 'role', 'columnheader' );
		}

		let container = document.createElement( 'div' );
		dataTable.parentNode.insertBefore( container, dataTable );
		container.classList.add( 'data-table--responsive' );
		container.appendChild(dataTable);
	}
}

/**************************************
 * Dialogs
 **************************************/

const dialogs = document.getElementsByClassName( 'dialog' );

if( dialogs )
{
	for( let i = 0; i < dialogs.length; i++ )
	{
		let dialog = dialogs[i];
		dialog.setAttribute( 'role', 'dialog' );
	}
}

/**************************************
 * Dividers
 **************************************/

const dividers = document.getElementsByClassName( 'divider' );

if( dividers )
{
	for( let i = 0; i < dividers.length; i++ )
	{
		let divider = dividers[i];

		divider.setAttribute( 'role' , 'separator' );
		divider.setAttribute( 'aria-orientation' , 'horizontal' );
	}
}

/**************************************
* Navigation drawer
**************************************/

const drawers = document.getElementsByClassName( 'drawer' );

if( drawers )
{
	for( let i = 0 ; i < drawers.length; i++ )
	{
		let drawer = drawers[i];
		let parents = drawer.querySelectorAll( '.drawer__item__parent' );
		let children = drawer.querySelectorAll( '.drawer__item__children' );

		console.log(parents);
		parents.forEach( parent => {
			let child = parent.nextElementSibling;
			let height = child.getBoundingClientRect().height;

			child.style.setProperty( '--drawer__item__children-height', 0 );
			child.style.display = 'none';

			parent.addEventListener( 'click', () => {
				if( child.classList.contains( 'active' ) )
				{
					child.style.setProperty( '--drawer__item__children-height', 0 );	
					child.style.setProperty( 'display', 'none' );	
					child.classList.remove( 'active' );
				} else {
					child.style.setProperty( '--drawer__item__children-height', `${height}px` );
					child.style.setProperty( 'display', 'block' );
					child.classList.add( 'active' );
				}
			});
		});
	}
}

/**************************************
 * Menu
 **************************************/

const menus = document.getElementsByClassName( 'menu' );

if( menus )
{
	for( let i = 0; i < menus.length; i++ )
	{
		let menu = menus[i];
		let style = menu.getBoundingClientRect();
		let width = style.width;
		let height = style.height;

		menu.style.setProperty( '--menu-max-width', 0 );
		menu.style.setProperty( '--menu-max-height', 0 );

		let observer = new MutationObserver( ( mutations ) => {
			mutations.forEach( ( mutation ) => {
				if( mutation.attributeName === 'class' ) {
					let attributeValue = document.getElementById( mutation.target.id ).getAttribute( mutation.attributeName );

					if( attributeValue.indexOf('active') > -1 )
					{
						menu.style.setProperty( '--menu-max-width', `${width}px` );
						menu.style.setProperty( '--menu-max-height', `${height}px` );
					} else {
						menu.style.setProperty( '--menu-max-width', 0 );
						menu.style.setProperty( '--menu-max-height', 0 );
					}
				}
			});
		});
		observer.observe( menu, {
			attributes: true
		});
/*
		menu.addEventListener( 'active', () => {
			console.log(1);
			menu.style.setProperty( '--menu-max-width', `${width}px`);
			menu.style.setProperty( '--menu-max-height', `${height}px` );
		});

		menu.addEventListener( 'inactive', () => {
			console.log(2);
			menu.style.setProperty( '--menu-max-width', 0 );
			menu.style.setProperty( '--menu-max-height', 0 );
		});*/
	}
}

/**************************************
 * Progress
 **************************************/

const progressBars = document.getElementsByClassName( 'progress' );

if( progressBars )
{
	for( let i = 0; i < progressBars.length; i++ )
	{
		let progressBar = progressBars[i];
		let progressBarWidth = progressBar.getBoundingClientRect().width;
		let progress = progressBar.querySelector( '.progress__bar' );

		console.log(progressBar.tagName);

		// If element has a progressbar child
		if( progress )
		{
			progressBar.setAttribute( 'aria-valuenow', progress.style.width.replace('%', '') );
		}

		progressBar.setAttribute( 'role', 'progressbar' );
		progressBar.setAttribute( 'aria-valuemin', '0' );
		progressBar.setAttribute( 'aria-valuemax', '100' );
	}
}

/**************************************
 * Selection
 **************************************/

const switches = document.getElementsByClassName( 'switch' );

if( switches )
{
	for( let i = 0; i < switches.length; i++ )
	{
		let switchElement = switches[i];

		switchElement.setAttribute( 'role', 'switch' );
		switchElement.setAttribute( 'aria-checked', switchElement.checked );
		switchElement.setAttribute( 'aria-disabled', switchElement.disabled );

		switchElement.addEventListener( 'click', () => {
			switchElement.setAttribute( 'aria-checked', switchElement.checked );
		});
	}
}

const checkboxes = document.getElementsByClassName( 'switch' );

if( checkboxes )
{
	for( let i = 0; i < checkboxes.length; i++ )
	{
		let checkbox = checkboxes[i];

		checkbox.setAttribute( 'role', 'switch' );
		checkbox.setAttribute( 'aria-checked', checkbox.checked );
		checkbox.setAttribute( 'aria-disabled', checkbox.disabled );

		checkbox.addEventListener( 'click', () => {
			checkbox.setAttribute( 'aria-checked', checkbox.checked );
		});
	}
}

/**************************************
* Tabs
* TODO add aria
**************************************/

const tabBars = document.getElementsByClassName( 'tabs' );

if( tabBars )
{
	for( let i = 0; i < tabBars.length; i++ )
	{
		let tabBar = tabBars[i];

		tabBar.setAttribute( 'role', 'tablist' );

		let tabs = tabBar.getElementsByClassName( 'tabs__tab' );

		if( tabs )
		{
			for( let j = 0; j < tabs.length; j++ )
			{
				let tab = tabs[j];

				tab.setAttribute( 'role', 'tab' );
			}
		}
	}
}

/**************************************
* Text fields
**************************************/

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

/**************************************
* Tooltips
**************************************/

const tooltips = document.getElementsByClassName( 'tooltip' );

if( tooltips )
{
	for( let i = 0; i < tooltips.length; i++ )
	{
		let tooltip = tooltips[i];
		let content = tooltip.querySelector( '.tooltip__content' );
		let width = content.getBoundingClientRect().width;
		let id = `tooltip-${i}`;

		// Element triggering tooltip
		let controller = tooltip.childNodes.forEach( controller => {
			if( controller.classList !== undefined && !controller.classList.contains( 'tooltip__content' ) )
			{
				controller.setAttribute( 'aria-describedby', id );
				controller.setAttribute( 'aria-haspopup', true );
			}
		});

		content.setAttribute( 'id', id );
		content.setAttribute( 'role', 'tooltip' );
		content.style.setProperty( '--tooltip-width', `${width}px` );
	}
}

/**************************************
* Triggers
**************************************/

const triggers = document.querySelectorAll( '[data-trigger]' );
const active = new Event('active', {'bubbles': true, 'cancelable': true});
const inactive = new Event('inactive', {'bubbles': true, 'cancelable': true});
let triggered = []; // Store all elements that are triggered

if( triggers )
{
	for( let i = 0; i < triggers.length; i++ )
	{
		let trigger = triggers[i];
		let id = trigger.dataset.trigger;
		let element = document.getElementById( id );

		trigger.classList.add('cursor--pointer');

		if( !element )
		{
			console.error('Trigger element not found');
		}

		if( element ) {
			let className = `${element.classList[ 0 ]}--active`;

			trigger.addEventListener( 'click', () =>
			{
			// Set the currently triggered element(s) in array
			triggered.indexOf( element ) < 0 ? triggered.push( element ) : '';

			if( element.classList.contains( className ) ) {
				element.classList.remove( className );
				document.dispatchEvent( inactive );
			} else {
				element.classList.add( className );
				document.dispatchEvent( active );
				}
			} );

			document.addEventListener( 'mouseup', ( e ) =>
			{
				for( let i = 0; i < triggered.length; i++ )
				{
					let trigger = triggered[ i ];

					if( trigger === e.target || trigger !== e.target && !trigger.contains( e.target ) ) {
						trigger.classList.remove( className );
						document.dispatchEvent( inactive );

						// Remove element from array
						i === 0 ? triggered.shift() : triggered.slice( i, 1 );
					}
				}
			});
		}
	}
}

/**************************************
 * Typography
 **************************************/

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

headings.forEach( heading => {
	let headers = document.getElementsByClassName( heading );

	if( headers )
	{
		for( let i = 0; i < headers.length; i++ )
		{
			let header = headers[i];
			header.setAttribute( 'role', 'heading' );
		}
	}
});

 /*************************************
  * Functions
  *************************************/

function tag( element )
{
	return element.tagName;
}