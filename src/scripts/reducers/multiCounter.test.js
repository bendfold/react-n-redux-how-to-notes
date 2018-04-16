// REDUCER
import { getMultiCounterReducers } from './multiCounter';
// CONSTANTS
// ACTIONS
import * as actions from '../actions';
// API
import { mockDataBase } from '../api';
// LIBS
import { v4 } from 'uuid';
// CONSTANTS
import { TYPE, REDUCER_NAME } from '../constants/index';
// MOCK-STORE
import {mockStore} from '../utils/test/mockStore';

const reducerName = REDUCER_NAME.B;
let store = {};

describe('REDUCERS', () => {

	describe('Thunk driven', () => {
		beforeEach(() => {
			store = mockStore();
		});
		afterEach(() => {
			store = {};
		});

		describe('Fetch counter success', () => {
				test('Should take in a counters object from the API call and add it to the current state.', async () => {
				expect.assertions(1);
				await store.dispatch( actions.fetchCounters( reducerName, true ) );
				
				const thunkActions = store.getActions();
				const stateBefore = {};
				const actualResult = getMultiCounterReducers().counterCollection(stateBefore, thunkActions[1]);

				expect(actualResult).toEqual(mockDataBase);
			});
		});

		describe('Multi counter increment', () => {
			it('Should increment the counter relative to the supplied ID', async () => {
				expect.assertions(1);
				await store.dispatch( actions.fetchCounters( reducerName, true ) );
				
				const thunkActions = store.getActions();
				const stateBefore = getMultiCounterReducers().counterCollection({}, thunkActions[1]);
				const firstItemKey = Object.keys(stateBefore)[0];
				const firstItemId = stateBefore[firstItemKey].id;
				const actualResult = getMultiCounterReducers().counterCollection(stateBefore, actions.incrementCounter(firstItemId));

				expect(actualResult[firstItemId].count).toEqual(stateBefore[firstItemId].count + 1);
			});
		});

		describe('Multi counter decrement', () => {
			it('Should decrement the counter relative to the supplied ID', async () => {
				expect.assertions(1);
				await store.dispatch( actions.fetchCounters( reducerName, true ) );
				
				const thunkActions = store.getActions();
				const stateBefore = getMultiCounterReducers().counterCollection({}, thunkActions[1]);
				const firstItemKey = Object.keys(stateBefore)[0];
				const firstItemId = stateBefore[firstItemKey].id;
				const actualResult = getMultiCounterReducers().counterCollection(stateBefore, actions.decrementCounter(firstItemId));

				expect(actualResult[firstItemId].count).toEqual(stateBefore[firstItemId].count - 1);
			});
		});

		describe('isFetching', () => {
			it('Should be set to true when the action type is FETCH_COUNTERS_REQUEST', async () => {
				expect.assertions(1);
				await store.dispatch( actions.fetchCounters( reducerName, true ) );
				
				const thunkActions = store.getActions();
				const stateBefore = false;
				const actualResult = getMultiCounterReducers().isFetching(stateBefore, thunkActions[0]);

				expect(actualResult).toEqual(true);
			});
			it('Should be set to false when the action type is FETCH_COUNTERS_SUCCESS', async () => {
				expect.assertions(1);
				await store.dispatch( actions.fetchCounters( reducerName, true ) );

				const thunkActions = store.getActions();
				const stateBefore = true;
				const actualResult = getMultiCounterReducers().isFetching(stateBefore, thunkActions[1]);

				expect(actualResult).toEqual(false);
			});
		});

		describe('errorMessage', () => {
			it('Should return and error message as a string when the action type is FETCH_COUNTERS_FAILURE', async () => {
				expect.assertions(1);
				await store.dispatch( actions.fetchCounters( reducerName, false ) );
				
				const thunkActions = store.getActions();
				const stateBefore = null;
				const actualResult = getMultiCounterReducers().errorMessage(stateBefore, thunkActions[1]);

				expect(typeof actualResult).toEqual('string');
			});

			it('Should return null when the action type is FETCH_COUNTERS_REQUEST', async () => {
				expect.assertions(1);
				await store.dispatch( actions.fetchCounters( reducerName, false ) );
				
				const thunkActions = store.getActions();
				const stateBefore = null;
				const actualResult = getMultiCounterReducers().errorMessage(stateBefore, thunkActions[0]);

				expect(actualResult).toEqual(null);
			});

			it('Should return null when the action type is FETCH_COUNTERS_SUCCESS', async () => {
				expect.assertions(1);
				await store.dispatch( actions.fetchCounters( reducerName, true ) );
				
				const thunkActions = store.getActions();
				const stateBefore = null;
				const actualResult = getMultiCounterReducers().errorMessage(stateBefore, thunkActions[1]);
				
				expect(actualResult).toEqual(null);
			});
			
		});
	
	});

	describe('Create counter', () => {
		const stateBefore = {};
		const actualResult = getMultiCounterReducers().counterCollection(stateBefore, actions.createCounter());

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

			const actualResult = getMultiCounterReducers().counterCollection(stateBefore, { type: TYPE.CREATE_COUNTER });
			const resultKeys = Object.keys(actualResult);

			expect(resultKeys.length).toEqual(2);

		});
	});
	
});
