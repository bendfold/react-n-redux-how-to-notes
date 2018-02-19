// FRAMEWORK
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// COMPONENTS
import App from './App';

const Root = ({store}) => (
	<Provider store={store}>
		<BrowserRouter>
			<Route path='/' component={App} />
		</BrowserRouter>
	</Provider>
);

export default Root;

Root.propTypes = {
	store: PropTypes.object.isRequired,
};
