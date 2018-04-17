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

// Thunk Aysnc Method for adding data to the server. 
export const addCounterToServer = () => (dispatch) => {
	return api.addCounter().then(
		(response) => {

			console.log('response --- ', response);
			
			dispatch({
				type: TYPE.ADD_COUNTER_SUCESS,
				response
			});
		}
	);
};

// Thunk Aysnc Method for fetching data. 
export const fetchCounters = (name, path, serverSim) => (dispatch, getState) => {
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

	return api.fetchCounterCollection(path, serverSim)
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
