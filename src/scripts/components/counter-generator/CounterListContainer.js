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

const mapStateToProps = (state) => {
	return {
		counterCollection: state.counterCollectionA.counterCollection,
		isFetching: getIsFetching(state.counterCollectionA),
		reducerName: REDUCER_NAME.A
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpClick: (id, reducerName) => {
			dispatch(actions.incrementCounter(id, reducerName));
		},
		onDownClick: (id, reducerName) => {
			dispatch(actions.decrementCounter(id, reducerName));
		},
	};
};

const CounterListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterList);

export default CounterListContainer;
