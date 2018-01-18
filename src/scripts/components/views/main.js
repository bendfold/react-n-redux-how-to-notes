// Framework
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Components
import CounterContainer from '../counter/CounterContainer';
import counterViewA from './CounterViewA';
import counterViewB from './CounterViewB';

const Main = () => (
	<Switch>
		<Route exact path='/' render={() => (
			<Redirect
				exact
				from='/'
				to='/counterViewA'
				key='from-root'
			/>
		)} />
		<Route path='/counterViewA' component={counterViewA} />
		<Route path='/counterViewB' component={counterViewB} />
	</Switch>
);

export default Main;
