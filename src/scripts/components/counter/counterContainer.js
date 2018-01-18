// Framework
import React from 'react';
import { connect } from 'react-redux';
// Components
import Counter from './Counter';


const mapStateToProps = (
	state
) => {
	console.log('state ', state)
	console.log('props ', props)
	return {
		counter: state.counter
	};
};

const mapDispatchToProps = (
	dispatch
) => {
	return {
		onUpClick: () => {
			dispatch(incrementCounter());
		},
		onDownClick: () => {
			dispatch(decrementCounter());
		}
	}
};

const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);


export default CounterContainer;
