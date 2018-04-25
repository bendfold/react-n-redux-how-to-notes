// FRAMEWORK
import React, { Component } from 'react';
import { connect } from 'react-redux';
// ACTIONS
import * as actions from '../../actions';
// REDUCERS
import { getIsFetching, getErrorMessage } from '../../reducers';
// COMPONENTS
import CounterList from '../counter-generator/CounterList';
import FetchError from '../error-handling/FetchErrorContainer';
// CONSTANTS
import { TYPE, REDUCER_NAME } from '../../constants';
// API
import { fetchCounterCollection } from '../../api';

const reducerName = REDUCER_NAME.B;

class CounterListContainer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.fetchData();
	}
	fetchData() {
		const {requestCounters, fetchCounters} = this.props;

		fetchCounters(reducerName, true); // Thunk based async dispatch calls.
	}
	render() {
		const { counterCollection, isFetching, errorMessage, incrementCounter, decrementCounter } = this.props;
		if (isFetching && !Object.keys(counterCollection).length) {
			return <p>Loading Counters...</p>;
		}
		if (errorMessage && !Object.keys(counterCollection).length) {
			return <FetchError message={errorMessage} />
		}
		return <CounterList onUpClick={incrementCounter} onDownClick={decrementCounter} {...this.props} />
	}
}

const mapStateToProps = (state) => {
	return {
		counterCollection: state.counterCollectionB.counterCollection,
		isFetching: getIsFetching(state.counterCollectionB),
		errorMessage: getErrorMessage(state.counterCollectionB),
		reducerName
	};
};

// Passing in Redux shitniz to the component, by connecting them to itself.
CounterListContainer = connect(
	mapStateToProps,
	actions
)(CounterListContainer);

export default CounterListContainer;
