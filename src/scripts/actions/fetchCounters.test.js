import { fetchCounters } from './index';
import { TYPE, REDUCER_NAME } from '../constants/index';
// MOCK-STORE
import {mockStore} from '../utils/test/mockStore';

// https://michalzalecki.com/testing-redux-thunk-like-you-always-want-it/

describe('ACTIONS', () => {
	describe('fetchCounters', () => {
			
		// const actualResult = fetchCounters( REDUCER_NAME.B );
		

		it('Should FOO', async () => {
			const store = mockStore();
			
			await store.dispatch( fetchCounters( REDUCER_NAME.B ) );
			const actions = store.getActions();
			
			console.log('actions ->- ', actions);

			expect(actions[0]).toEqual(TYPE.FETCH_COUNTERS_SUCCESS);

		});

	});
});