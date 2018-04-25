/* --- START APPLICATION ACCESSORIES --- */
// EXPORTED CSS
import './styles/app.styl';
/* --- END APPLICATION ACCESSORIES --- */

/* --- START APPLICATION FRAMEWORK & LOGIC--- */
// FRAMEWORK
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom'
// COMPONENTS
import Root from './scripts/components/Root';
// STORE
import configureStore from './scripts/store/configureStore';

ReactDOM.render(
	<Root store={configureStore()} />,
	document.getElementById('appRoot')
);
