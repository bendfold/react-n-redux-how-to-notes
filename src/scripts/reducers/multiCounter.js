// CONSTANTS
import { TYPE } from '../constants';

export const createCounter = (state = {counters:[]}, action) => {
	switch (action.type) {
		case TYPE.CREATE_COUNTER:
			
			const getMaxId = (counterCollection) => {
				
				console.log('counterCollection ', counterCollection);

				return 0;
			};

			return {
				...state,
				counters: [
					...state.counters,
					{
						// ID generator from https://redux.js.org/recipes/writing-tests#reducers
						id: getMaxId(state.counters),
						count: 0
					}
				]
			};
		default:
			return state;
	}
}


/*
// CONSTANTS
import { TYPE } from '../constants';

export const createCounter = (state = [{counterCollection:[]], action) => {
	switch (action.type) {
		case TYPE.CREATE_COUNTER:
			return [
					..state
				{
					// ID generator from https://redux.js.org/recipes/writing-tests#reducers
					id: state.reduce((maxId, counter) => {
						return Math.max(counter.id, maxId);
					}, -1) + 1,
					count: 0
				}
			];
		default:
			return state;
	}
}
*/

