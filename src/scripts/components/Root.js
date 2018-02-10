// FRAMEWORK
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
// COMPONENTS
import App from './App';

const Root = ({store}) => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default Root;

Root.propypes = {
	store: PropTypes.object.isRequired,
};
