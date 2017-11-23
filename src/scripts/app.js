// Framework
import React from 'react';
import { Provider } from 'react-redux';
// State management
import { createStore } from 'redux';
import configureStore from './store/configureStore';
// Store
const store = configureStore();
// Components
import Header from './components/header/header';
import Main from './components/views/main';

const App = () => (
	<Provider store={store}>
		<div>
			<Header />
			<Main />
		</div>
	</Provider>
);

export default App;
