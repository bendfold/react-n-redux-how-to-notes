// CONSTANTS
import { TYPE } from '../constants';

export const createCounter = (state = [], action) => {
	switch (action.type) {
		case TYPE.CREATE_COUNTER:
			return [
				{
					// ID generator from https://redux.js.org/recipes/writing-tests#reducers
					id: state.reduce((maxId, counter) => {
						return Math.max(counter.id, maxId);
					}, -1) + 1,
					count: 0
				},
				...state
			];
		default:
			return state;
	}
}
