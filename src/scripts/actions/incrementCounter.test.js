import { incrementCounter } from './index';
import { TYPES } from '../constants/index';

describe('ACTIONS', () => {
	describe('decrementCounter', () => {
		it('should create an action that increments the counter by one', () => {
			const expectedAction = {
				type: TYPES.INCREMENT_COUNTER
			};

			expect(incrementCounter()).toEqual(expectedAction);
		});
	});
});