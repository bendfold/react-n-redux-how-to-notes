// FRAMEWORK
import React, { Component } from 'react';
import { connect } from 'react-redux';
// ACTIONS
import * as actions from '../../actions';
// COMPONENTS
import CounterList from '../counter-generator/CounterList';
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
		fetchCounterCollection().then((payload) => {
			this.props.receiveCounters(payload, reducerName);
		});
	}
	render() {
		const { counterCollection, isFetching } = this.props;
		if (isFetching && !Object.keys(counterCollection).length) {
			return <p>Loading Counters...</p>;
		}
		return <CounterList counterCollection={counterCollection} />
	}
}

const mapStateToProps = (state) => {
	return {
		counterCollection: state.counterCollectionB,
		isFetching: getIsFetching(state)
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
		receiveCounters: (payload, name) => {
			dispatch(actions.receiveCounters(payload, name));
		}
	};
};

// Passing in Redux shitniz to the component, by connecting them to itself.
CounterListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterListContainer);

export default CounterListContainer;
