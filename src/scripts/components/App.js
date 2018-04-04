// FRAMEWORK
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// LIBS
import uuidv4 from 'uuid/v4';
// COMPONENTS
import Navigation from './navigation/Navigation';
import BasicCounterContainer from './basic-counter/BasicCounterContainer';
import AddingReactRouterContainer from './add-react-router/AddingReactRouterContainer';
import CounterGeneratorContainer from './counter-generator/CounterGeneratorContainer';
import mockDataLoadContainer from './mock-data/mockDataLoadContainer';
import selectors from './selectors/selectorsContainer';
import thunks from './thunks/thunksContainer';
import NoMatch from './no-match/NoMatch';
// CONSTANTS
import { ROUTE_PATH } from '../constants';

const App = () => ([
	<Navigation key={uuidv4()} />,
	<Switch key={uuidv4()}>
		<Route path={ROUTE_PATH.basicCounter} component={BasicCounterContainer} />
		<Route key={uuidv4()} path={ROUTE_PATH.addingReactRouter} component={AddingReactRouterContainer} />
		<Route key={uuidv4()} path={ROUTE_PATH.counterGenerator} component={CounterGeneratorContainer} />
		<Route key={uuidv4()} path={ROUTE_PATH.mockDataLoad} component={mockDataLoadContainer} />
		<Route key={uuidv4()} path={ROUTE_PATH.selectors} component={selectors} />
		<Route key={uuidv4()} path={ROUTE_PATH.thunks} component={thunks} />
		<Route key={uuidv4()} exact path='/' render={() => (
			<Redirect
				exact
				from='/'
				to={ROUTE_PATH.basicCounter}
				key="from-root"
			/>
		)} />
		<Route key={uuidv4()} component={NoMatch} />
	</Switch>
]);

export default App;
