// FRAMEWORK
import { combineReducers } from 'redux';
// REDUCERS
import count from './count';
import { multiCounter as counterCollection } from './multiCounter';
// HELPERS
import { createNamedReducer } from './reducerHelpers';
// CONSTANTS
import { REDUCER_NAME } from '../constants';

const rootReducer = combineReducers({
	count,
	counterCollectionA: createNamedReducer(counterCollection, REDUCER_NAME.A),
	counterCollectionB: createNamedReducer(counterCollection, REDUCER_NAME.B)
});

export default rootReducer;
