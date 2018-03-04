import { combineReducers } from 'redux';

import count from './count';
import { createCounter } from './multiCounter';

const rootReducer = combineReducers({
	count,
	createCounter
});

export default rootReducer;
