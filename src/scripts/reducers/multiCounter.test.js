import { multiCounter } from './multiCounter';
import { TYPE } from '../constants/index';

describe('REDUCERS', () => {

	describe('Create counter', () => {

		const stateBefore = {};

		const actualResult = multiCounter(stateBefore, { type: TYPE.CREATE_COUNTER });

		it('Should create a new counter object and add it to the state', () => {
			expect(typeof actualResult).toEqual('object');
		});

		it('Should contain an object with the keys, "count" and "id"', () => {
			const expectedResult = ['count', 'id'].sort();
			const resultId = Object.keys(actualResult)[0];

			expect(Object.keys(actualResult[resultId]).sort()).toEqual(expectedResult);
		});

		it('Should have a "count" property set to 0', () => {
			const resultId = Object.keys(actualResult)[0];

			expect(actualResult[resultId].count).toEqual(0);
		});

		// it('should create a new counter object with a correctly incremented ID', () => {
		// 	const stateBefore = {
		// 			0 : {
		// 				id: 0,
		// 				count: 0
		// 			}
		// 		};
		// 	const expectedResult = {
		// 			0 : {
		// 				id: 0,
		// 				count: 0
		// 			},
		// 			1 : {
		// 				id: 1,
		// 				count: 0
		// 			}
		// 		};
		// 	const actualResult = multiCounter(stateBefore, { type: TYPE.CREATE_COUNTER });

		// 	expect(actualResult).toMatchObject(expectedResult);
		// });
	});

	// describe('Multi counter increment', () => {
	// 	it('should increment the counter relative to the supplied ID', () => {
	// 		const stateBefore = {
	// 			0 : {
	// 				id: 0,
	// 				count: 0
	// 			},
	// 			1 : {
	// 				id: 1,
	// 				count: 0
	// 			}
	// 		};
	// 		const action = {
	// 			id: 1,
	// 			type: TYPE.INCREMENT_MULTI_COUNTER
	// 		};
	// 		const expectedResult = {
	// 			0 : {
	// 				id: 0,
	// 				count: 0
	// 			},
	// 			1 : {
	// 				id: 1,
	// 				count: 1
	// 			}
	// 		};

	// 		expect(multiCounter(stateBefore, action)).toEqual(expectedResult);
	// 	});
	// });

	// describe('Multi counter decrement', () => {
	// 	it('should decrement the counter relative to the supplied ID', () => {
	// 		const stateBefore = {
	// 			0 : {
	// 				id: 0,
	// 				count: 0
	// 			},
	// 			1 : {
	// 				id: 1,
	// 				count: 2
	// 			}
	// 		};
	// 		const action = {
	// 			id: 1,
	// 			type: TYPE.DECREMENT_MULTI_COUNTER
	// 		};
	// 		const expectedResult = {
	// 			0 : {
	// 				id: 0,
	// 				count: 0
	// 			},
	// 			1 : {
	// 				id: 1,
	// 				count: 1
	// 			}
	// 		};

	// 		expect(multiCounter(stateBefore, action)).toEqual(expectedResult);
	// 	});
	// });

});
