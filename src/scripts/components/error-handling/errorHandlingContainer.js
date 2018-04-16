// FRAMEWORK
import React from 'react';
// LIBS
import uuidv4 from 'uuid/v4';
// COMPONENTS
import Instructions from '../instructions/Instructions';
import {default as CounterGeneratorControlsContainer} from './ErrorCounterGeneratorContainer';
import {default as CounterListContainer} from './ErrorCounterListContainer';
// CONTENT
import content from '../../../content/markdown/error-handling.md';

const errorHandlingContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Error Handling</h1>,
	<CounterGeneratorControlsContainer key={uuidv4()} />,
	<CounterListContainer key={uuidv4()} />,
	<Instructions key={uuidv4()} content={content} />,
]);

export default errorHandlingContainer;
