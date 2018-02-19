// FRAMEWORK
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// COMPONENTS
import Navigation from './navigation/Navigation';
import BasicCounterContainer from './basic-counter/BasicCounterContainer';
import AddingReactRouterContainer from './add-react-router/AddingReactRouterContainer';
import NoMatch from './no-match/NoMatch';

const App = () => ([
	<Navigation />,
	<Switch>
		<Route path='/basic-counter' component={BasicCounterContainer} />
		<Route path='/adding-react-router' component={AddingReactRouterContainer} />
		<Route exact path='/' render={() => (
			<Redirect
				exact
				from='/'
				to='/basic-example'
				key="from-root"
			/>
		)} />
		<Route component={NoMatch} />
	</Switch>
]);

export default App;
