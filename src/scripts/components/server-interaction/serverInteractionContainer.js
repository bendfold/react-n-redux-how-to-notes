// FRAMEWORK
import React from 'react';
// LIBS
import uuidv4 from 'uuid/v4';
// COMPONENTS
import Instructions from '../instructions/Instructions';
import {default as CounterGeneratorControlsContainer} from './ServerInterationCounterGeneratorControlsContainer';
import {default as CounterListContainer} from './ServerInteractionCounterListContainer';
// CONTENT
import content from '../../../content/markdown/server-interaction.md';

const ServerInteractionContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Server Interaction</h1>,
	<CounterGeneratorControlsContainer key={uuidv4()} />,
	<CounterListContainer key={uuidv4()} />,
	<Instructions key={uuidv4()} content={content} />
]);

export default ServerInteractionContainer;