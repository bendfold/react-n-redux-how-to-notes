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
// CONSTANTS
import { CLASSNAME } from '../../constants';

const Columns = () => (
	<div className={CLASSNAME.demoColumnWrapper}>
		<div className={CLASSNAME.infoColumn}>
			<Instructions key={uuidv4()} content={content} />
		</div>
		<div className={CLASSNAME.counterColumn}>
			<CounterGeneratorControlsContainer key={uuidv4()} />
			<CounterListContainer key={uuidv4()} />
		</div>
	</div>
);

const ServerInteractionContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Server Interaction</h1>,
	<Columns key={uuidv4()} />,
]);

export default ServerInteractionContainer;