import decrementCounter from './decrementCounter';
import { ACTION_TYPES } from '../constants/index';

describe('ACTIONS', () => {
	describe('decrementCounter', () => {
		it('should create an action that decrements the counter by one', () => {
			const expectedAction = {
				type: ACTION_TYPES.DECREMENT_COUNTER
			};

			expect(decrementCounter()).toEqual(expectedAction);
		
		});
	});
});