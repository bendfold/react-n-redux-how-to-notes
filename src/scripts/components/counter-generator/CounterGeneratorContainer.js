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

const CounterGeneratorContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Counter Generator</h1>,
	<Columns key={uuidv4()} />
]);

export default CounterGeneratorContainer;
