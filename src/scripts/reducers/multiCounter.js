// CONSTANTS
import { TYPE } from '../constants';
// LIBS
import { v4 } from 'uuid';

export const multiCounter = (state = {}, action) => {
	switch (action.type) {
		case TYPE.CREATE_COUNTER:
			const newId = v4();

			console.log('state ', state);

			return	{
				...state,
				[newId] : {
					id: newId,
					count: 0
				}
			};
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
