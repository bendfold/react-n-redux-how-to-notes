import { createCounter } from './multiCounter';
import { TYPE } from '../constants/index';

describe('REDUCERS', () => {
	describe('Create counter', () => {
		it('should create a new counter object and add it to the state', () => {
			const stateBefore = [];

			const expectedResult = [{
				id: 0,
				count: 0
			}];
			const actualResult = createCounter(stateBefore, { type: TYPE.CREATE_COUNTER });

			expect(actualResult).toMatchObject(expectedResult);
		});
	});
});
