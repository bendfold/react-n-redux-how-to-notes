// CREDIT - https://redux.js.org/recipes/structuring-reducers/reusing-reducer-logic
/*
This closure acts as a wrapper around your reducer allowing you to tag the reducer 
with a name so that it can be re-used in multiple places.
*/
export const createNamedReducer = (reducerFunction, reducerName) => {
	return (state, action) => {
		const {name} = action;
		const isInitializationCall = state === undefined;

		if(name !== reducerName && !isInitializationCall) return state;
		 
		return reducerFunction(state, action);
	};
};
