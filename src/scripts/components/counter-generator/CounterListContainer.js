// FRAMEWORK
import React from 'react';
import { connect } from 'react-redux';
// ACTIONS
import * as actions from '../../actions';
// REDUCERS
import { getIsFetching } from '../../reducers';
// COMPONENTS
import CounterList from './CounterList';
// CONSTANTS
import { TYPE, REDUCER_NAME } from '../../constants';

const reducerName = REDUCER_NAME.A;

const mapStateToProps = (state) => {
	return {
		counterCollection: state.counterCollectionA.counterCollection,
		isFetching: getIsFetching(state.counterCollectionA)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpClick: (id) => {
			dispatch(actions.incrementCounter(id, reducerName));
		},
		onDownClick: (id) => {
			dispatch(actions.decrementCounter(id, reducerName));
		},
	};
};

const CounterListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterList);

export default CounterListContainer;
