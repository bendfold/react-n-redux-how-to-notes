// FRAMEWORK
import React from 'react';
// COMPONENTS
import Instructions from './instructions/Instructions';
import CounterContainer from './counter/CounterContainer';

const App = () => (
	<div>
		{/*<h1>React & Redux Counter Example</h1>*/} 
		<CounterContainer />
		<Instructions />
	</div>
);

export default App;
