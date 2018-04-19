// FRAMEWORK
import { combineReducers } from 'redux';
// CONSTANTS
import { TYPE } from '../constants';

const counterCollection = (state = {}, action) => {
	switch (action.type) {
		case TYPE.FETCH_COUNTERS_SUCCESS:
			return {
				...state,
				...action.payload
			};
		case TYPE.ADD_COUNTER_SUCCESS:
			return {
				...state,
				...action.response
			};
		case TYPE.REMOVE_COUNTER_SUCCESS:
			const newState = Object.assign({}, state);
			delete newState[action.id];
			return newState;
		case TYPE.CREATE_COUNTER:
			return {
				...state,
				[action.id]: {
					id: action.id,
					count: 0
				}
			};
		case TYPE.INCREMENT_COUNTER:
			if (state.hasOwnProperty(action.id)) {
				return {
					...state,
					[action.id]: {
						...state[action.id],
						count: state[action.id].count + 1
					}
				};
			} else {
				return state;
			}
		case TYPE.DECREMENT_COUNTER:
			if (state.hasOwnProperty(action.id)) {
				return {
					...state,
					[action.id]: {
						...state[action.id],
						count: state[action.id].count - 1
					}
				};
			} else {
				return state;
			}
		default:
			return state;
	}
};

const isFetching = (state = true, action) => {
	switch (action.type) {
		case TYPE.FETCH_COUNTERS_REQUEST:
			return true;
		case TYPE.FETCH_COUNTERS_SUCCESS:
			return false;
		case TYPE.FETCH_COUNTERS_FAILURE:
			return false;
		default:
			return state;
	}
};

const errorMessage = (state = null, action) => {
	switch (action.type) {
		case TYPE.FETCH_COUNTERS_FAILURE:
			return action.message;
		case TYPE.FETCH_COUNTERS_REQUEST:
			return null;
		case TYPE.FETCH_COUNTERS_SUCCESS:
			return null;
		default:
			return state;
	}
};

export const getMultiCounterReducers = () => {
	return {
		counterCollection,
		isFetching,
		errorMessage
	};
};

const multiCounter = () => {
	return combineReducers(getMultiCounterReducers());
};

export default multiCounter;

// SELECTORS
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
