import { TYPES } from '../constants/index';

const incrementCounter = () => {
	return {
		type: TYPES.INCREMENT_COUNTER
	}
};

const decrementCounter = () => {
	return {
		type: TYPES.DECREMENT_COUNTER
	}
};

export {
	incrementCounter,
	decrementCounter,
};