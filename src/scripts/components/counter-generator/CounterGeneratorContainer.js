// FRAMEWORK
import React from 'react';
// LIBS
import uuidv4 from 'uuid/v4';
// COMPONENTS
import Instructions from '../instructions/Instructions';
import CounterGeneratorControlsContainer from './CounterGeneratorControlsContainer';
// CONTENT
import content from '../../../content/markdown/counter-generator.md';

const CounterGeneratorContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Counter Generator</h1>,
	<Instructions key={uuidv4()} content={content} />,
	<CounterGeneratorControlsContainer key={uuidv4()} />
]);

export default CounterGeneratorContainer;