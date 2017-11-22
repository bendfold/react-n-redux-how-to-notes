import { ACTIONS } from '../constants/index';

const {
	INCREMENT_COUNTER,
	DECREMENT_COUNTER
} = ACTIONS;

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
