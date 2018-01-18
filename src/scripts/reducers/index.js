import { combineReducers } from 'redux';
// Reducers
import counter from './counter';

// https://redux.js.org/docs/recipes/reducers/ReusingReducerLogic.html
function createNamedWrapperReducer(reducerFunction, reducerName) {
	return (state, action) => {
		const {name} = action;
		const isInitializationCall = state === undefined;
		if(name !== reducerName && !isInitializationCall) return state;

		console.log('action ', action);

		return reducerFunction(state, action);
	}
}

const rootReducer = combineReducers({
	counterA: createNamedWrapperReducer(counter, 'A'),
	counterB: createNamedWrapperReducer(counter, 'B')
});

export default rootReducer;
