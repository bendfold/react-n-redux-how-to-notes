// CONSTANTS
import { TYPES } from '../constants';

const count = (state = 0, action) => {
	switch (action.type) {
		case TYPES.INCREMENT_COUNTER:
			return state += 1;
		case TYPES.DECREMENT_COUNTER:
			return (state > 0) ? state -= 1 : state;
		default:
			return state;
	}
}

export default count;
