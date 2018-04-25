// LIBS
import uuidv4 from 'uuid/v4';
// CONSTANTS
import { ROUTE_PATH } from '../constants';

const delay = (ms) => ( new Promise(resolve => setTimeout(resolve, ms)) );

export const MAIN_NAV_ITEMS = [
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
	{
		label: 'Loading data from an API',
		link: ROUTE_PATH.mockDataLoad,
		id: uuidv4()
	},
	{
		label: 'Selectors',
		link: ROUTE_PATH.selectors,
		id: uuidv4()
	},
	{
		label: 'Thunks',
		link: ROUTE_PATH.thunks,
		id: uuidv4()
	},
	{
		label: 'Error Handling',
		link: ROUTE_PATH.errorHandling,
		id: uuidv4()
	},
	{
		label: 'Server Interaction',
		link: ROUTE_PATH.serverInteraction,
		id: uuidv4()
	}
];

export let mockDataBase = {
	"cbaa3e6d-3dc8-4f33-84d3-e64c30f1496e": {
		"id": "cbaa3e6d-3dc8-4f33-84d3-e64c30f1496e",
		"count": 5
	},
	"755f81e5-152c-44cf-bb7f-1fef1bf0baae": {
		"id": "755f81e5-152c-44cf-bb7f-1fef1bf0baae",
		"count": 3
	},
	"b034c4fb-bb86-4269-99e0-2933701bf27e": {
		"id": "b034c4fb-bb86-4269-99e0-2933701bf27e",
		"count": 1
	},
	"85bf4a43-bc3c-46a8-877c-110b449ea9fd": {
		"id": "85bf4a43-bc3c-46a8-877c-110b449ea9fd",
		"count": 10
	},
	"43c1383f-4a96-439d-994b-da99343f3a90": {
		"id": "43c1383f-4a96-439d-994b-da99343f3a90",
		"count": 4
	}
};

export let serverInteractionDB = {
	"cef86f29-4c8c-45ee-9d8f-2c9ce9f2091b": {
		"id": "cef86f29-4c8c-45ee-9d8f-2c9ce9f2091b",
		"count": 7
	},
	"e24bc8da-c325-45b0-825a-cc8e6705ec85": {
		"id": "e24bc8da-c325-45b0-825a-cc8e6705ec85",
		"count": 1
	},
	"8857d515-341b-46c7-a72a-3a5cfaeb1d46": {
		"id": "8857d515-341b-46c7-a72a-3a5cfaeb1d46",
		"count": 11
	}
};

export const fetchCounterCollection = (path, serverSim) => {
	return delay(500).then(() => {

		// In the end this path with be the endpoint URL, but for now we can use it to test errors.
		if (!path) {
			throw new Error('BOOOM!!!!');
		}

		return serverSim ? serverInteractionDB : mockDataBase;
	});
};

// ----------------------------------
// Server interaction examples
// ----------------------------------
export const addCounter = () => {
	return delay(500).then(() => {
		const newCounterID = uuidv4();
		const newCounter = {
				[newCounterID]: {
					id: newCounterID,
					count: 0
				}
			};
		const newMockDataBase = Object.assign(serverInteractionDB, newCounter);
		
		serverInteractionDB = newMockDataBase;

		return newCounter;
	});
};


export const removeCounter = (id) => {
	return delay(500).then(() => {
		const newMockDataBase = Object.assign({}, serverInteractionDB);

		delete newMockDataBase[id];
		serverInteractionDB = newMockDataBase;

		return '200';
	});
};


