/* exported css */
import './styles/app.styl';
// Framework
import React from 'react';
import ReactDOM from 'react-dom';
// Component
import Root from './scripts/components/Root';
// Store
import configureStore from './scripts/store/configureStore';
const store = configureStore();

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('appRoot')
);


