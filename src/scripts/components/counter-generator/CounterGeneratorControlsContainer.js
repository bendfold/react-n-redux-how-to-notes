// FRAMEWORK
import React from 'react';
import {connect} from 'react-redux';
// ACTIONS
import * as actions from '../../actions';
// COMPONENTS
import CounterGeneratorControls from './CounterGeneratorControls';
// CONSTANTS
import { REDUCER_NAME } from '../../constants';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(actions.createCounter(REDUCER_NAME.A))
		}
	}
};

const CounterGeneratorControlsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterGeneratorControls);

export default CounterGeneratorControlsContainer;
