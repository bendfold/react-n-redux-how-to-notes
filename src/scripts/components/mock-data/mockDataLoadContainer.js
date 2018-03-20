// FRAMEWORK
import React from 'react';
// LIBS
import uuidv4 from 'uuid/v4';
// COMPONENTS
import Instructions from '../instructions/Instructions';
import {default as CounterGeneratorControlsContainer} from './MockDataCounterGeneratorControlsContainer';
import {default as CounterListContainer} from './MockDataCounterListContainer';
// CONTENT
import content from '../../../content/markdown/mock-data-load.md';

const mockDataLoadContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Load Data from an API</h1>,
	<Instructions key={uuidv4()} content={content} />,
	<CounterGeneratorControlsContainer key={uuidv4()} />,
	<CounterListContainer key={uuidv4()} />,
]);

export default mockDataLoadContainer;
