// FRAMEWORK
import React from 'react';
// COMPONENTS
import Instructions from '../instructions/Instructions';
import CounterContainer from '../counter/CounterContainer';
// CONTENT
import content from '../../../content/markdown/basic_setup.md';

const BasicCounterContainer = () => (
	<div>
		<h1>React & Redux Basic Counter Example</h1>
		<CounterContainer />
		<Instructions content={content} />
	</div>
);

export default BasicCounterContainer;
