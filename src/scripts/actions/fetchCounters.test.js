import { fetchCounters } from './index';
import { TYPE, REDUCER_NAME } from '../constants/index';
// MOCK-STORE
import {mockStore} from '../utils/test/mockStore';

// https://michalzalecki.com/testing-redux-thunk-like-you-always-want-it/

describe('ACTIONS', () => {
	describe('fetchCounters', () => {
			
		// const actualResult = fetchCounters( REDUCER_NAME.B );

		// -----------------------------------------------------------------------------
		// DO THIS - .resolves & .rejects
		// https://facebook.github.io/jest/docs/en/asynchronous.html
		// -----------------------------------------------------------------------------

		test('Should be able to dispatch a data request action and then a request success action', async () => {

			expect.assertions(1);

			const store = mockStore();
			const reducerName = REDUCER_NAME.B;

			await store.dispatch( fetchCounters( reducerName, true ) );
			const actions = store.getActions();

			expect(actions[0].type).toEqual(TYPE.FETCH_COUNTERS_REQUEST);
			
		});

		test('Should be able to dispatch a data request action and then a reque1st success action', async () => {
			const store = mockStore();
			const reducerName = REDUCER_NAME.B;

			await store.dispatch( fetchCounters( reducerName, true ) );
			const actions = store.getActions();

			expect(actions[1].type).toEqual(TYPE.FETCH_COUNTERS_ppSUCCESS);

		});

	});
});


// describe('ACTIONS', () => {
// 		describe('fetchCounters - Success route though thunk.', () => {
// 			const store = mockStore();
// 			const reducerName = REDUCER_NAME.B;

			

// 			it('Action 00 should contain the keys, "type" and "name".', async () => {
// 				const expectedResult = ['type', 'name'].sort();
// 				const actions = store.getActions();
				
// 				await store.dispatch( fetchCounters( reducerName, true ) );

// 				expect(Object.keys(actions[0]).sort()).toEqual(expectedResult);
// 			});
// 			it('Action 00 should contain have the correct type value.', async () => {
// 				await store.dispatch( fetchCounters( reducerName, true ) );
				
// 				const actions = store.getActions();
				
// 				expect(actions[0].type).toEqual(TYPE.FETCH_COUNTERS_REQUEST);
// 			});

// 			it('Action 01 should contain the keys, "type", "name" and payload.', async () => {
// 				await store.dispatch( fetchCounters( reducerName, true ) );
				
// 				const expectedResult = ['type', 'name', 'payload'].sort();
// 				const actions = store.getActions();
				

// 				expect(Object.keys(actions[1]).sort()).toEqual(expectedResult);
// 			});
// 			it('Action 01 should contain have the correct type value.', async () => {
// 				await store.dispatch( fetchCounters( reducerName, true ) );
// 				const actions = store.getActions();

// 				expect(actions[1].type).toEqual(TYPE.FETCH_COUNTERS_SUCCESS);
// 			});
			

// 		});
// });