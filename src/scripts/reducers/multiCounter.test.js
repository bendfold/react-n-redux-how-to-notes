import {createCounter} from './multiCounter';
import { TYPES } from '../constants/index';
// LIBS
import uuidv4 from 'uuid/v4';

describe('REDUCERS', () => {
	describe('Create counter', () => {
		it('should create a new counter object and add it to the state', () => {
			const stateBefore = [];
			const expectedResult = [{
				id: uuidv4(),
				count: 0
			}];
			const actualResult = createCounter(stateBefore, { type: TYPES.CREATE_COUNTER });

			actualResult.id = expectedResult.id;

			expect(actualResult).toMatchObject(expectedResult);
		});
	});
});
