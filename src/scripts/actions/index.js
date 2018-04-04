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

const requestCounters = (name) => {
	return {
		type: TYPE.REQUEST_COUNTERS,
		name
	}
};

const receiveCounters = (payload, name) => {
	return {
		type: TYPE.RECEIVE_COUNTERS,
		payload,
		name
	}
};

export const fetchCounters = (reducerName) => (dispatch, getState) => {
	/* 
		---- TODO ----
		If this can be fired from user interaction you need to add a 
		check in for isFetching to block extra network requests, 
		like this - https://goo.gl/FUTqgS
	*/
	dispatch( requestCounters(reducerName) );

	return api.fetchCounterCollection().then((payload) => {
		dispatch( receiveCounters(payload, reducerName) );
	});
};
