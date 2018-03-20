// FRAMEWORK
import React from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import CounterList from './CounterList';
// CONSTANTS
import { TYPE } from '../../constants';

const mapStateToProps = (state) => {
	return {counterCollection: state.counterCollectionA};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpClick: (id) => {
			dispatch({
				type: `${TYPE.INCREMENT_MULTI_COUNTER}A`,
				id
			})
		},
		onDownClick: (id) => {
			dispatch({
				type: TYPE.DECREMENT_MULTI_COUNTER,
				id
			})
		}
	};
};

const CounterListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterList);

export default CounterListContainer;
