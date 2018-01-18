import React, { PropTypes } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom'
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
// Component
import App from './App';

const Root = ({store}) => (
	<Provider store={store}>
		<BrowserRouter history={browserHistory}>
			<Route path='/' component={App} />
		</BrowserRouter>
	</Provider>
);

export default Root;

Root.propypes = {
	store: PropTypes.object.isRequired,
};
