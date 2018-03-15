// CONSTANTS
import { TYPE } from '../constants';
// LIBS
// import { Map } from 'immutable';

export const multiCounter = (state = {}, action) => {
	switch (action.type) {
		case TYPE.CREATE_COUNTER:

			// TODO - Lift out to helpers
			function getMaxId(idList) {
				return idList.reduce((maxId, currentVal) => {
					return Math.max(parseInt(currentVal, 10), maxId);
				}, 0) + 1;
			};

			const counterKeys = Object.keys(state);
			const newId = !!counterKeys.length ? getMaxId( counterKeys ) : 0;
			
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