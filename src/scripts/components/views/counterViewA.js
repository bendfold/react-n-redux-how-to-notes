import React, { Component } from 'react';
import CounterContainer from '../counter/CounterContainer';
import { connect } from 'react-redux';
// ACTIONS
import * as actions from '../../actions';

// const counterViewA = (state) => (
// 	<div>
// 		<h1>I am Counter View A</h1>
// 		<CounterContainer counter={state.counterA} />
// 		<CounterContainer counter={state.counterB} />
// 	</div>
// );

class CounterViewA extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		console.log('this.props ', this.props);
		console.log('this.props ', );
		const { counterA, counterB, incrementCounter, decrementCounter } = this.props;
		return(
			<div>
				<h1>I am Counter View A</h1>
				<CounterContainer counter={this.props.counterA} />
				<CounterContainer counter={this.props.counterB} />
			</div>
		);
	}
};

const mapStateToProps = (state, {params}) => {
	return {
		...state
	}
};

CounterViewA = connect(mapStateToProps, actions)(CounterViewA);

export default CounterViewA;
