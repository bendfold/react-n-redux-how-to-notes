// FRAMEWORK
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// COMPONENTS
import Navigation from './navigation/Navigation';
import BasicCounterContainer from './basic-counter/BasicCounterContainer';
import AddingReactRouterContainer from './add-react-router/AddingReactRouterContainer';
import CounterGeneratorContainer from './counter-generator/CounterGeneratorContainer'
import NoMatch from './no-match/NoMatch';
// CONSTANTS
import { ROUTE_PATH } from '../constants';

const App = () => ([
	<Navigation />,
	<Switch>
		<Route path={ROUTE_PATH.basicCounter} component={BasicCounterContainer} />
		<Route path={ROUTE_PATH.addingReactRouter} component={AddingReactRouterContainer} />
		<Route path={ROUTE_PATH.counterGenerator} component={CounterGeneratorContainer} />
		<Route exact path='/' render={() => (
			<Redirect
				exact
				from='/'
				to={ROUTE_PATH.basicCounter}
				key="from-root"
			/>
		)} />
		<Route component={NoMatch} />
	</Switch>
]);

export default App;
