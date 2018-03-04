import { createCounter } from './index';
import { TYPE } from '../constants/index';

describe('ACTIONS', () => {
	describe('createCounter', () => {
		it('should create an action that creates a new counter', () => {
			const expectedAction = {
				type: TYPE.CREATE_COUNTER
			};

			expect(createCounter()).toEqual(expectedAction);
		});
	});
});
