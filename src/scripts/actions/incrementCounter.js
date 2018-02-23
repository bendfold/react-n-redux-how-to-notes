import { ACTION_TYPES } from '../constants/index';

const incrementCounter = () => {
	return {
		type: ACTION_TYPES.INCREMENT_COUNTER
	}
};


export default incrementCounter;