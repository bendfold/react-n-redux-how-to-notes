// FRAMEWORK
import React from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import Counter from './Counter';
// CONSTANTS
import { ACTIONS } from '../../constants';

const mapStateToProps = (state) => {
	return {
		count: state.count,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpClick: () => {
			dispatch({
				type: ACTIONS.INCREMENT_COUNTER
			})
		},
		onDownClick: () => {
			dispatch({
				type: ACTIONS.DECREMENT_COUNTER
			})
		}
	}
};

const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

export default CounterContainer;
