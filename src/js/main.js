import AppBar from'./classes/AppBar';
import Autocomplete from'./classes/Autocomplete';
import Badge from'./classes/Badge';
import Banner from'./classes/Banner';
import Button from'./classes/Button';
import DataTable from'./classes/DataTable';
import Dialog from'./classes/Dialog';
import Divider from'./classes/Divider';
import Drawer from'./classes/Drawer';
import Menu from'./classes/Menu';
import Picker from'./classes/Picker';
import Progress from'./classes/Progress';
import SelectField from'./classes/SelectField';
import{ Switch, Checkbox, Radio } from'./classes/Selection';
import Slider from'./classes/Slider';
import TabBar from'./classes/Tab';
import TextField from'./classes/TextField';
import Tooltip from'./classes/Tooltip';
import'./trigger';

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

const pickers = document.getElementsByClassName('picker');
const pickerOptions = {
	days: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Tur', 'Fri', 'Sat', ],
	months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ],
};

for( let picker of pickers )
{
	new Picker( picker, pickerOptions );
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
