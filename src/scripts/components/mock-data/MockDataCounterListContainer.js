// FRAMEWORK
import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import CounterList from '../counter-generator/CounterList';
// CONSTANTS
import { TYPE, REDUCER_NAME } from '../../constants';
// API
import { fetchCounterCollection } from '../../api';


class CounterListContainer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		
		const {counterCollection} = this.props;

		fetchCounterCollection().then((data) => {
			console.log('DidMount counterCollection ---> ', data);
	
		});
	}

	componentDidUpdate(prevProps) {
		fetchCounterCollection().then((data) => {
			console.log('DidUpdate counterCollection ---> ', data);
	
		});
	}

	render() {
		return <CounterList {...this.props}/> 
	}
}


const mapStateToProps = (state) => {
	return {counterCollection: state.counterCollectionB};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpClick: (id) => {
			dispatch({
				type: TYPE.INCREMENT_MULTI_COUNTER,
				name: REDUCER_NAME.B,
				id
			})
		},
		onDownClick: (id) => {
			dispatch({
				type: TYPE.DECREMENT_MULTI_COUNTER,
				name: REDUCER_NAME.B,
				id
			})
		}
	};
};

// Passing in Redux shitniz to the component, by connecting them to itself.
CounterListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterListContainer);

export default CounterListContainer;