import { decrementCounter } from './index';
import { TYPE } from '../constants/index';

describe('ACTIONS', () => {
	describe('decrementCounter', () => {
		it('should create an action that decrements the counter by one', () => {
			const expectedAction = {
				type: TYPE.DECREMENT_COUNTER
			};

			expect(decrementCounter()).toEqual(expectedAction);
		});
	});
});
