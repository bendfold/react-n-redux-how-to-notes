// CONSTANTS
import { TYPE } from '../constants';
// LIBS
import { v4 } from 'uuid';

export const multiCounter = (state = {}, action) => {

	console.log('action OOOOO ',action);

	switch (action.type) {
		case TYPE.CREATE_COUNTER:
			const newId = v4();
			return	{
				...state,
				[newId] : {
					id: newId,
					count: 0
				}
			};
		case TYPE.RECEIVE_COUNTERS:
			// console.log('action l ', action);
			return {
				...state,
				...action.payload
			}
		case TYPE.INCREMENT_MULTI_COUNTER:
			if (state.hasOwnProperty(action.id)) {
				return {
					...state,
					[action.id]: {
						...state[action.id],
						count: state[action.id].count + 1
					}
				};
			} else {
				return state;
			}
		case TYPE.DECREMENT_MULTI_COUNTER:
			if (state.hasOwnProperty(action.id)) {
				return {
					...state,
					[action.id]: {
						...state[action.id],
						count: state[action.id].count - 1
					}
				};
			} else {
				return state;
			}
		default:
			return state;
	}
}
