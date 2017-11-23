/* exported css */
import './styles/app.styl';
// Framework
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// Component
import App from './scripts/app';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('appRoot')
);


