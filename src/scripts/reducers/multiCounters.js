// CONSTANTS
import { TYPES } from '../constants';

const multiCounters = (state = [], action) => {
	switch (action.type) {
		case TYPES.CREATE_COUNTER:
			console.log('You got to here...');
			return state ;
		default:
			return state;
	}
}

export default multiCounters;