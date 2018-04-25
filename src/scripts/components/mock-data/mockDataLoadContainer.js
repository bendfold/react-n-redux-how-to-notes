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

const mockDataLoadContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Load Data from an API</h1>,
	<Columns key={uuidv4()} />
]);

export default mockDataLoadContainer;
