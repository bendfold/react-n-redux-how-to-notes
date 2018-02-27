import { decrementCounter } from './index';
import { TYPES } from '../constants/index';

describe('ACTIONS', () => {
	describe('decrementCounter', () => {
		it('should create an action that decrements the counter by one', () => {
			const expectedAction = {
				type: TYPES.DECREMENT_COUNTER
			};

			expect(decrementCounter()).toEqual(expectedAction);
		});
	});
});