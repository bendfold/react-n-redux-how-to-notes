import count from './count';
import { ACTION_TYPES } from '../constants/index';

describe('REDUCERS', () => {
	describe('Count increment', () => {
		it('should increase the current value by one', () => {
			const expectedResult = 2;

			expect(count(1, {type: ACTION_TYPES.INCREMENT_COUNTER})).toEqual(expectedResult);
		});
	});
	describe('Count decrement', () => {
		it('should decrease the current value by one', () => {
			const expectedResult = 0;

			expect(count(1, {type: ACTION_TYPES.DECREMENT_COUNTER})).toEqual(expectedResult);
		});
	});
});