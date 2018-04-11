import { TYPE } from '../constants/index';
// LIBS
import { v4 } from 'uuid';
// API
import * as api from '../api';
// REDUCERS
import { getIsFetching } from '../reducers';

export const incrementCounter = (id, name) => {
	return {
		type: TYPE.INCREMENT_COUNTER,
		name,
		id
	}
};

export const decrementCounter = (id, name) => {
	return {
		type: TYPE.DECREMENT_COUNTER,
		name,
		id
	}
};

export const createCounter = (name) => {
	return {
		type: TYPE.CREATE_COUNTER,
		id: v4(),
		name
	}
};

// export const fetchCountersRequest = (name) => ();

export const fetchCounters = (name, path) => (dispatch, getState) => {
	/*
		---- TODO ----
		If this can be fired from user interaction you need to add a
		check in for isFetching to block extra network requests,
		like this - https://goo.gl/FUTqgS
	*/
	dispatch({
		type: TYPE.FETCH_COUNTERS_REQUEST,
		name
	});

	return api.fetchCounterCollection(path)
		.then(
			(payload) => {
				dispatch({
					type: TYPE.FETCH_COUNTERS_SUCCESS,
					payload,
					name
				});
			},
			(error) => {
				dispatch({
					type: TYPE.FETCH_COUNTERS_FAILURE,
					name,
					message: error.message || 'Something went wrong'
				});
			}
		);
};
