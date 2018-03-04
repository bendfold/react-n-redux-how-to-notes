import { TYPE } from '../constants/index';

const incrementCounter = () => {
	return {
		type: TYPE.INCREMENT_COUNTER
	}
};

const decrementCounter = () => {
	return {
		type: TYPE.DECREMENT_COUNTER
	}
};

const createCounter = () => {
	return {
		type: TYPE.CREATE_COUNTER
	}
};

export {
	incrementCounter,
	decrementCounter,
	createCounter,
};
