import { fetchCounters } from './index';
import { TYPE, REDUCER_NAME } from '../constants/index';
// MOCK-STORE
import {mockStore} from '../utils/test/mockStore';

// https://michalzalecki.com/testing-redux-thunk-like-you-always-want-it/
const reducerName = REDUCER_NAME.B;
let store = {};

describe('ACTIONS', () => {
	describe('fetchCounters', () => {
		beforeEach(() => {
			store = mockStore();
		});
		afterEach(() => {
			store = {};
		});
		
		test('Action 0 should contain the keys, "type" and "name".', async () => {
			expect.assertions(1);

			await store.dispatch( fetchCounters( reducerName, true ) );
			const actions = store.getActions();
			const expectedResult = ['type', 'name'].sort();

			expect(Object.keys(actions[0]).sort()).toEqual(expectedResult);
		});

		test('Action 0 "type" value should be correctly assigned.', async () => {
			expect.assertions(1);

			await store.dispatch( fetchCounters( reducerName, true ) );
			const actions = store.getActions();

			expect(actions[0].type).toEqual(TYPE.FETCH_COUNTERS_REQUEST);
		
		});

		test('Action 0 "name" value should be a string.', async () => {
			expect.assertions(1);

			await store.dispatch( fetchCounters( reducerName, true ) );
			const actions = store.getActions();

			expect(typeof actions[0].name).toEqual('string');
		});

		test('Success - Action 1 should contain the keys, "type", "name" and "payload".', async () => {
			expect.assertions(1);

			await store.dispatch( fetchCounters( reducerName, true ) );
			const actions = store.getActions();
			const expectedResult = ['type', 'name', 'payload'].sort();

			expect(Object.keys(actions[1]).sort()).toEqual(expectedResult);
		});

		test('Success - Action 1 "type" value should be correctly assigned.', async () => {
			expect.assertions(1);

			await store.dispatch( fetchCounters( reducerName, true ) );
			const actions = store.getActions();

			expect(actions[1].type).toEqual(TYPE.FETCH_COUNTERS_SUCCESS);
		});
		
		test('Success - Action 1 "name" value should be a string.', async () => {
			expect.assertions(1);

			await store.dispatch( fetchCounters( reducerName, true ) );
			const actions = store.getActions();

			expect(typeof actions[1].name).toEqual('string');
		});

		test('Error - Action 1 "type" value should be correctly assigned.', async () => {
			expect.assertions(1);

			await store.dispatch( fetchCounters( reducerName, false ) );
			const actions = store.getActions();

			expect(actions[1].type).toEqual(TYPE.FETCH_COUNTERS_FAILURE);
		});

		test('Error - Action 1 "name" value should be a string.', async () => {
			expect.assertions(1);

			await store.dispatch( fetchCounters( reducerName, false ) );
			const actions = store.getActions();

			expect(typeof actions[1].name).toEqual('string');
		});

	});
});
