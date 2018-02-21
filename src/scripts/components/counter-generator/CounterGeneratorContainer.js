// FRAMEWORK
import React from 'react';
// COMPONENTS
import Instructions from '../instructions/Instructions';
import CounterGeneratorControlsContainer from './CounterGeneratorControlsContainer';
// CONTENT
import content from '../../../content/markdown/counter-generator.md';

const CounterGeneratorContainer = () => ([
	<h1>React & Redux - Counter Generator</h1>,
	<Instructions content={content} />,
	<CounterGeneratorControlsContainer />
]);

export default CounterGeneratorContainer;
