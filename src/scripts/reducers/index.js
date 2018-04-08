// FRAMEWORK
import { combineReducers } from 'redux';
// REDUCERS
import count from './count';
import multiCounter, * as fromCounterCollection from './multiCounter';
// HELPERS
import { createNamedReducer } from './reducerHelpers';
// CONSTANTS
import { REDUCER_NAME } from '../constants';

const rootReducer = combineReducers({
	count,
	counterCollectionA: createNamedReducer(multiCounter(), REDUCER_NAME.A),
	counterCollectionB: createNamedReducer(multiCounter(), REDUCER_NAME.B)
});

export default rootReducer;

export const getIsFetching = (state) =>
	fromCounterCollection.getIsFetching(state);

export const getErrorMessage = (state) =>
	fromCounterCollection.getErrorMessage(state);
