// CONSTANTS
import { TYPE } from '../constants';

export const createCounter = (state = {counters:[]}, action) => {
	switch (action.type) {
		case TYPE.CREATE_COUNTER:
			return {
				...state,
				counters: [
					...state.counters,
					{
						// ID generator from https://redux.js.org/recipes/writing-tests#reducers
						id: state.counters.reduce((maxId, counterItem) => {
							return Math.max(counterItem.id, maxId);
						}, -1) + 1,
						count: 0
					}
				]
			};
		default:
			return state;
	}
}
