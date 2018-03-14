// CONSTANTS
import { TYPE } from '../constants';

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
			return state.map((item => {
				if (item.id === action.id) {
					item.count += 1;
				}
				return item;
			}));
		case TYPE.DECREMENT_MULTI_COUNTER:
			return state.map((item => {
				if (item.id === action.id) {
					item.count -= 1;
				}
				return item;
			}));
		default:
			return state;
	}
}