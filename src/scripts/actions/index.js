import { ACTIONS } from '../constants/index';

const { INCREMENT_COUNTER, DECREMENT_COUNTER } = ACTIONS;

console.log(INCREMENT_COUNTER);

export const incrementCounter = () => {
	return {
		type: INCREMENT_COUNTER
	}
};
export const decrementCounter = () => {
	return {
		type: DECREMENT_COUNTER
	}
};
