import { ACTION_TYPES } from '../constants/index';

const {
	INCREMENT_COUNTER,
	DECREMENT_COUNTER
} = ACTION_TYPES;

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
