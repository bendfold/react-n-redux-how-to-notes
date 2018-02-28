// CONSTANTS
import { TYPES } from '../constants';
// LIBS
import uuidv4 from 'uuid/v4';

export const createCounter = (state = [], action) => {
	switch (action.type) {
		case TYPES.CREATE_COUNTER:
			return [
				...state,
				{
					id: uuidv4(),
					count: 0
				}
			];
		default:
			return state;
	}
}
