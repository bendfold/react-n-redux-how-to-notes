/* exported css */
import './styles/app.styl';
// FRAMEWORK
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom'
// COMPONENTS
import Root from './scripts/components/Root';

ReactDOM.render(
	<Root />,
	document.getElementById('appRoot')
);


