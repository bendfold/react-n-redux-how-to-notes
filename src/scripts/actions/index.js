import { TYPE } from '../constants/index';
// LIBS
import { v4 } from 'uuid';

const incrementCounter = (id, name) => {
	return {
		type: TYPE.INCREMENT_COUNTER,
		name,
		id
	}
};

const decrementCounter = (id, name) => {
	return {
		type: TYPE.DECREMENT_COUNTER,
		name,
		id
	}
};

const createCounter = (name) => {
	// TODO - ID NEEDS TO GO HERE TO MAKE REDUCER DETERMINISTIC
	return {
		type: TYPE.CREATE_COUNTER,
		id: v4(),
		name
	}
};

const receiveCounters = (payload, name) => {
	return {
		type: TYPE.RECEIVE_COUNTERS,
		payload,
		name
	}
};

export {
	incrementCounter,
	decrementCounter,
	createCounter,
	receiveCounters
};
