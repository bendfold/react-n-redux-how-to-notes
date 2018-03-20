// FRAMEWORK
import React from 'react';
import {connect} from 'react-redux';
// COMPONENTS
import CounterGeneratorControls from '../counter-generator/CounterGeneratorControls';
// CONSTANTS
import { TYPE, REDUCER_NAME } from '../../constants';

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch({
				type: TYPE.CREATE_COUNTER,
				name: REDUCER_NAME.B
			})
		}
	}
};

const MockDataCounterGeneratorControlsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterGeneratorControls);

export default MockDataCounterGeneratorControlsContainer;
