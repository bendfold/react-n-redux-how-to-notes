import incrementCounter from './incrementCounter';
import { ACTION_TYPES } from '../constants/index';

describe('ACTIONS', () => {
	describe('decrementCounter', () => {
		it('should create an action that increments the counter by one', () => {
			const expectedAction = {
				type: ACTION_TYPES.INCREMENT_COUNTER
			};

			expect(incrementCounter()).toEqual(expectedAction);
		});
	});
});