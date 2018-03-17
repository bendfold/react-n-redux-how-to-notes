import { multiCounter } from './multiCounter';
import { TYPE } from '../constants/index';
// LIBS
import { v4 } from 'uuid';

describe('REDUCERS', () => {

	describe('Create counter', () => {
		const stateBefore = {};
		const actualResult = multiCounter(stateBefore, { type: TYPE.CREATE_COUNTER });

		it('Should create a new counter object and add it to the state.', () => {
			expect(typeof actualResult).toEqual('object');
		});

		it('Should contain an object with the keys, "count" and "id".', () => {
			const expectedResult = ['count', 'id'].sort();
			const resultId = Object.keys(actualResult)[0];

			expect(Object.keys(actualResult[resultId]).sort()).toEqual(expectedResult);
		});

		it('Should have a "count" property set to 0.', () => {
			const resultId = Object.keys(actualResult)[0];

			expect(actualResult[resultId].count).toEqual(0);
		});

		it('Should add a new counter object along side existing counter objects in the state.', () => {
			const stateBeforeId = v4();
			const stateBefore = {
						[stateBeforeId] : {
							id: stateBeforeId,
							count: 0
						}
					};

			const actualResult = multiCounter(stateBefore, { type: TYPE.CREATE_COUNTER });
			const resultKeys = Object.keys(actualResult);

			expect(resultKeys.length).toEqual(2);

		});
	});

	describe('Multi counter increment', () => {
		it('Should increment the counter relative to the supplied ID', () => {
			const id00 = v4();
			const id01 = v4();

			const stateBefore = {
				[id00] : {
					id: id00,
					count: 0
				},
				[id01] : {
					id: id01,
					count: 0
				}
			};
			const action = {
				id: id01,
				type: TYPE.INCREMENT_MULTI_COUNTER
			};
			const expectedResult = {
				...stateBefore,
				[action.id]: {
					...stateBefore[action.id],
					count: 1
				}
			};

			expect(multiCounter(stateBefore, action)).toEqual(expectedResult);
		});
	});

	describe('Multi counter decrement', () => {
		it('Should decrement the counter relative to the supplied ID', () => {
			const id00 = v4();
			const id01 = v4();

			const stateBefore = {
				[id00]: {
					id: id00,
					count: 0
				},
				[id01]: {
					id: id01,
					count: 3
				}
			};
			const action = {
				id: id01,
				type: TYPE.DECREMENT_MULTI_COUNTER
			};
			const expectedResult = {
				...stateBefore,
				[action.id]: {
					...stateBefore[action.id],
					count: 2
				}
			};

			expect(multiCounter(stateBefore, action)).toEqual(expectedResult);
		});
	});

});
