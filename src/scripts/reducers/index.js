import { combineReducers } from 'redux';

import count from './count';
import multiCounters from './multiCounters';

const rootReducer = combineReducers({
	count,
	multiCounters
});

export default rootReducer;
