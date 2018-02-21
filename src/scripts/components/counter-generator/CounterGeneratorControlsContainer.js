// FRAMEWORK
import React from 'react';
import {connect} from 'react-redux';
// COMPONENTS
import CounterGeneratorControls from './CounterGeneratorControls';
// CONSTANTS
import { ACTIONS } from '../../constants';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch({
				type: ACTIONS.CREATE_COUNTER
			})
		}
	}
};

const CounterGeneratorControlsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterGeneratorControls);

export default CounterGeneratorControlsContainer;