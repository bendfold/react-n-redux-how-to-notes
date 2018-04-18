import { addCounterToServer } from './index';
import { TYPE, REDUCER_NAME } from '../constants/index';
// MOCK-STORE
import {mockStore} from '../utils/test/mockStore';

const reducerName = REDUCER_NAME.D;
let store = {};

describe('ACTIONS', () => {
	describe('addCounterToServer', () => {
		beforeEach(() => {
			store = mockStore();
		});
		afterEach(() => {
			store = {};
		});

		test('Action 0 should contain the keys, "type", "name" and "response".', async () => {
			expect.assertions(1);

			await store.dispatch( addCounterToServer( reducerName ) );
			const actions = store.getActions();
			const expectedResult = ['type', 'name', 'response'].sort();

			expect(Object.keys(actions[0]).sort()).toEqual(expectedResult);
		});

		test('Action 0 "type" value should be correctly assigned.', async () => {
			expect.assertions(1);

			await store.dispatch( addCounterToServer( reducerName ) );
			const actions = store.getActions();

			expect(actions[0].type).toEqual(TYPE.ADD_COUNTER_SUCCESS);
		});

		test('Action 0 "name" value should be a string.', async () => {
			expect.assertions(1);

			await store.dispatch( addCounterToServer( reducerName ) );
			const actions = store.getActions();

			expect(typeof actions[0].name).toEqual('string');
		});

	});
});
