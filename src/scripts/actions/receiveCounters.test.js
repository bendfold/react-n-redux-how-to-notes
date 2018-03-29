import { receiveCounters } from './index';
import { TYPE } from '../constants/index';

describe('ACTIONS', () => {
	describe('receiveCounters', () => {
		
		const actualResult = receiveCounters();

		it('should create an action object', () => {
			expect(typeof actualResult).toEqual('object');
		});
		it('should contain the keys "name", "payload" and "type"', () => {
			const expectedResult = ['name','payload', 'type'].sort();

			expect(Object.keys(actualResult).sort()).toEqual(expectedResult);
		});
		it(`should have the type property ${TYPE.RECEIVE_COUNTERS}`, () => {
			expect(actualResult.type).toEqual(TYPE.RECEIVE_COUNTERS);
		});
	});
});
