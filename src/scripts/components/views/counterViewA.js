import React from 'react';
import CounterContainer from '../counter/CounterContainer';

const counterViewA = (state) => (
	<div>
		<h1>I am Counter View A</h1>
		<CounterContainer counter={state.counterA} />
		<CounterContainer counter={state.counterB} />
	</div>
);

export default counterViewA;