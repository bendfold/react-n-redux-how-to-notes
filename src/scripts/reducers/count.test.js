import count from './count';
import { TYPE } from '../constants/index';

describe('REDUCERS', () => {
	describe('Count increment', () => {
		it('should increase the current value by one', () => {
			const expectedResult = 2;

			expect(count(1, {type: TYPE.INCREMENT_COUNTER})).toEqual(expectedResult);
		});
	});
	describe('Count decrement', () => {
		it('should decrease the current value by one', () => {
			const expectedResult = 0;

			expect(count(1, {type: TYPE.DECREMENT_COUNTER})).toEqual(expectedResult);
		});
	});
});
