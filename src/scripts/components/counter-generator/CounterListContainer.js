// FRAMEWORK
import React from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import CounterList from './CounterList';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({dispatch});

const CounterListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterList);

export default CounterListContainer;
