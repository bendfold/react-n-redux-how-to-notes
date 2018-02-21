// LIBS
import uuidv4 from 'uuid/v4';
// CONSTANTS
import { ROUTE_PATH } from '../constants';

const MAIN_NAV_ITEMS = [
	{
		label: 'Basic Counter',
		link: ROUTE_PATH.basicCounter,
		id: uuidv4()
	},
	{
		label: 'Adding React Router',
		link: ROUTE_PATH.addingReactRouter,
		id: uuidv4()
	},
	{
		label: 'Counter Generator',
		link: ROUTE_PATH.counterGenerator,
		id: uuidv4()
	},
];

export { MAIN_NAV_ITEMS };
