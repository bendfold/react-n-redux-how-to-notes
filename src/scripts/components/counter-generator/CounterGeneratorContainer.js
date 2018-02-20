// FRAMEWORK
import React from 'react';
// COMPONENTS
import Instructions from '../instructions/Instructions';
// CONTENT
import content from '../../../content/markdown/counter-generator.md';

const CounterGeneratorContainer = () => (
	<div>
		<h1>React & Redux - Counter Generator</h1>
		<Instructions content={content} />
	</div>
);

export default CounterGeneratorContainer;
