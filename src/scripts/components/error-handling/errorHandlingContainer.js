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

const errorHandlingContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Error Handling</h1>,
	<Columns key={uuidv4()} />,
]);

export default errorHandlingContainer;
