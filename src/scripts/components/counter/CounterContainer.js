// FRAMEWORK
import React from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import Counter from './Counter';

const mapStateToProps = (state) => {
	return {
		count: state.count,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpClick: () => {
			dispatch({
				type: 'INCREMENT_COUNTER'
			})
		},
		onDownClick: () => {
			dispatch({
				type: 'DECREMENT_COUNTER'
			})
		}
	}
};

const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

export default CounterContainer;
