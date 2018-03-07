import { combineReducers } from 'redux';

import count from './count';
import { createCounter as counterCollection } from './multiCounter';

const rootReducer = combineReducers({
	count,
	counterCollection
});

export default rootReducer;
