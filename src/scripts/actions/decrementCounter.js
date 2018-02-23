import { ACTION_TYPES } from '../constants/index';

const decrementCounter = () => {
	return {
		type: ACTION_TYPES.DECREMENT_COUNTER
	}
};


export default decrementCounter;