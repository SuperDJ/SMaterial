import AppBar from'js/classes/AppBar';
import Autocomplete from'js/classes/Autocomplete';
import Badge from'js/classes/Badge';
import Banner from'js/classes/Banner';
import Button from'js/classes/Button';
import DataTable from'js/classes/DataTable';
import Dialog from'js/classes/Dialog';
import Divider from'js/classes/Divider';
import Drawer from'js/classes/Drawer';
import Menu from'js/classes/Menu';
import Progress from'js/classes/Progress';
import SelectField from'js/classes/SelectField';
import{ Switch, Checkbox, Radio } from'js/classes/Selection';
import Slider from'js/classes/Slider';
import TabBar from'js/classes/Tab';
import TextField from'js/classes/TextField';
import Tooltip from'js/classes/Tooltip';

const appBars = document.getElementsByClassName('app-bar');

for( let appBar of appBars )
{
	new AppBar( appBar );
}

const autocompletes = document.getElementsByClassName('text-field--autocomplete');

for( let autocomplete of autocompletes )
{
	new Autocomplete( autocomplete );
}

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

const menus = document.getElementsByClassName( 'menu' );

for( let menu of menus )
{
	new Menu( menu );
}

const progressBars = document.getElementsByClassName( 'progress' );

for( let progressBar of progressBars )
{
	new Progress( progressBar );
}

const selectFields = document.getElementsByClassName( 'text-field--select' );

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