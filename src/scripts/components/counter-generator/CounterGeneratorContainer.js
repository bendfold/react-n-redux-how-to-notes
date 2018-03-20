// FRAMEWORK
import React from 'react';
// LIBS
import uuidv4 from 'uuid/v4';
// COMPONENTS
import Instructions from '../instructions/Instructions';
import CounterGeneratorControlsContainer from './CounterGeneratorControlsContainer';
import CounterListContainer from './CounterListContainer';
// CONTENT
import content from '../../../content/markdown/counter-generator.md';

const CounterGeneratorContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Counter Generator</h1>,
	<CounterGeneratorControlsContainer key={uuidv4()} />,
	<CounterListContainer key={uuidv4()} />,
	<Instructions key={uuidv4()} content={content} />
]);

export default CounterGeneratorContainer;
