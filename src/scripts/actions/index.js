import { ACTIONS } from '../constants/index';

const {
	INCREMENT_COUNTER,
	DECREMENT_COUNTER
} = ACTIONS;

export const incrementCounter = () => {
	console.log('incrementCounter fired ---');
	return {
		type: INCREMENT_COUNTER
	}
};
export const decrementCounter = () => {
	return {
		type: DECREMENT_COUNTER
	}
};
