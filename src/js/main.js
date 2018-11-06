import Badge from 'js/badge.js';
import Banner from 'js/banner';
import Button from 'js/button';
import DataTable from 'js/data-table';
import Dialog from 'js/dialog';
import Divider from 'js/divider';
import Drawer from 'js/drawer';

import Progress from 'js/progress';
import SelectField from 'js/select-field';
import { Switch, Checkbox, Radio } from 'js/selection';
import Slider from 'js/slider';
import TabBar from 'js/tab';
import TextField from 'js/text-field';
import Tooltip from 'js/tooltip';

const badges = document.getElementsByClassName( 'badge' );

for( let badge of badges )
{
	new Badge( badge );
}

const banners = document.getElementsByClassName( 'banner' );

for( let banner of banners )
{
	new Banner( banner );
}

const buttons = document.getElementsByClassName( 'button' );

for( let button of buttons )
{
	new Button( button );
}

const dataTables = document.getElementsByClassName( 'data-table' );

for( let dataTable of dataTables )
{
	new DataTable( dataTable );
}

const dialogs = document.getElementsByClassName( 'dialog' );

for( let dialog of dialogs )
{
	new Dialog( dialog );
}

const dividers = document.getElementsByClassName( 'divider' );

for( let divider of dividers )
{
	new Divider( divider );
}

const drawers = document.getElementsByClassName( 'drawer' );


for( let drawer of drawers )
{
	new Drawer( drawer );
}

const progressBars = document.getElementsByClassName( 'progress' );

for( let progressBar of progressBars )
{
	new Progress( progressBar );
}

const selectFields = document.getElementsByClassName( 'select-field' );

for( let selectField of selectFields )
{
	new SelectField( selectField );
}

const switches = document.getElementsByClassName( 'switch' );

for( let switchEl of switches )
{
	new Switch( switchEl );
}

const checkboxes = document.getElementsByClassName( 'checkbox' );

for( let checkbox of checkboxes )
{
	new Checkbox( checkbox );
}

const radios = document.getElementsByClassName( 'radio' );

for( let radio of radios )
{
	new Radio( radio );
}

const sliders = document.getElementsByClassName( 'slider' );

for( let slider of sliders )
{
	new Slider( slider );
}

const tabBars = document.getElementsByClassName( 'tabs' );

for( let tabBar of tabBars )
{
	new TabBar( tabBar );
}

const textFields = document.getElementsByClassName( 'text-field__input' );

for( let textField of textFields )
{
	new TextField( textField );
}

const tooltips = Array.from( document.querySelectorAll( '.tooltip' ) );

for( let tooltip of tooltips )
{
	new Tooltip( tooltip );
}