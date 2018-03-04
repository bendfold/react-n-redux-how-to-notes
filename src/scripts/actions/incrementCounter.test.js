import { incrementCounter } from './index';
import { TYPE } from '../constants/index';

describe('ACTIONS', () => {
	describe('decrementCounter', () => {
		it('should create an action that increments the counter by one', () => {
			const expectedAction = {
				type: TYPE.INCREMENT_COUNTER
			};

			expect(incrementCounter()).toEqual(expectedAction);
		});
	});
});
