/*
This file does replicate the stuff in multiCounter, but for demo purposes it 
*/

// CONSTANTS
import { TYPE } from '../constants';

const count = (state = 0, action) => {
	switch (action.type) {
		case TYPE.INCREMENT_COUNTER:
			return state += 1;
		case TYPE.DECREMENT_COUNTER:
			return (state > 0) ? state -= 1 : state;
		default:
			return state;
	}
}

export default count;
