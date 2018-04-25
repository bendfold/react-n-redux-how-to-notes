import { createCounter } from './index';
import { TYPE } from '../constants/index';

describe('ACTIONS', () => {
	describe('createCounter', () => {
		
		const actualResult = createCounter();

		it('should create an action that creates a new counter', () => {
			expect(typeof actualResult).toEqual('object');
		});
		it('should contain the keys "id", "type" and "name"', () => {
			const expectedResult = ['id', 'type', 'name'].sort();

			expect(Object.keys(actualResult).sort()).toEqual(expectedResult);
		});
		it(`should have the type property ${TYPE.CREATE_COUNTER}`, () => {
			expect(actualResult.type).toEqual(TYPE.CREATE_COUNTER);
		});
	});
});
