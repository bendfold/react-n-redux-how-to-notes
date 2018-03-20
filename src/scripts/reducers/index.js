import { combineReducers } from 'redux';
// REDUCERS
import count from './count';
import { multiCounter as counterCollection } from './multiCounter';
// HELPERS
import { createNamedReducer } from './reducerHelpers';

const rootReducer = combineReducers({
	count,
	counterCollectionA: createNamedReducer(counterCollection, 'A'),
	counterCollectionB: createNamedReducer(counterCollection, 'B')
});

console.log('rootReducer >>> ', rootReducer);

export default rootReducer;
