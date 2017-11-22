// Framework
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
// State management
import { createStore } from 'redux';
import configureStore from './store/configureStore';
// Store
const store = configureStore();
// Components
import CounterContainer from './components/counter/CounterContainer';

const App = () => (
	<Provider store={store}>
		<Router>
			<Route path='/' component={CounterContainer} />
		</Router>
	</Provider>
);

export default App;
