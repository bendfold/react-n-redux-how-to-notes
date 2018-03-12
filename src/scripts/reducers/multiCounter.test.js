import { createCounter, multiCount } from './multiCounter';
import { TYPE } from '../constants/index';

describe('REDUCERS', () => {
	describe('Create counter', () => {
		it('should create a new counter object and add it to the state', () => {
			const stateBefore = [];

			const expectedResult = [
						{
							id: 0,
							count: 0
						}
					];
			const actualResult = createCounter(stateBefore, { type: TYPE.CREATE_COUNTER });

			expect(actualResult).toMatchObject(expectedResult);
		});

		it('should create a new counter object with a correctly incremented ID', () => {
			const stateBefore = [
						{
							id: 0,
							count: 0
						}
					];

			const expectedResult = [
					{
						id: 0,
						count: 0
					},
					{
						id: 1,
						count: 0
					}
				];

			const actualResult = createCounter(stateBefore, { type: TYPE.CREATE_COUNTER });

			expect(actualResult).toMatchObject(expectedResult);
		});
	});
	describe('Multi counter increment', () => {
		it('should increment the counter relative to the supplied ID', () => {
			const stateBefore = [
				{
					id: 0,
					count: 0
				},
				{
					id: 1,
					count: 0
				}
			];
			const action = {
				id: 1,
				type: TYPE.INCREMENT_MULTI_COUNTER
			};
			const expectedResult = [
				{
					id: 0,
					count: 0
				},
				{
					id: 1,
					count: 1
				}
			];

			expect(multiCount(stateBefore, action)).toEqual(expectedResult);
		});
	});
	describe('Multi counter decrement', () => {
		it('should decrement the counter relative to the supplied ID', () => {
			const stateBefore = [
				{
					id: 0,
					count: 0
				},
				{
					id: 1,
					count: 2
				}
			];
			const action = {
				id: 1,
				type: TYPE.DECREMENT_MULTI_COUNTER
			};
			const expectedResult = [
				{
					id: 0,
					count: 0
				},
				{
					id: 1,
					count: 1
				}
			];

			expect(multiCount(stateBefore, action)).toEqual(expectedResult);
		});
	});
});
