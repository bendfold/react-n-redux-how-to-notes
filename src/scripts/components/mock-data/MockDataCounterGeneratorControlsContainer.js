// FRAMEWORK
import React from 'react';
import {connect} from 'react-redux';
// ACTIONS
import * as actions from '../../actions';
// COMPONENTS
import CounterGeneratorControls from '../counter-generator/CounterGeneratorControls';
// CONSTANTS
import { REDUCER_NAME } from '../../constants';

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(actions.createCounter(REDUCER_NAME.B));
		}
	}
};

const MockDataCounterGeneratorControlsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterGeneratorControls);

export default MockDataCounterGeneratorControlsContainer;
