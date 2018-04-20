// FRAMEWORK
import React from 'react';
// COMPONENTS
import Instructions from '../instructions/Instructions';
import CounterContainer from '../counter/CounterContainer';
// CONTENT
import content from '../../../content/markdown/basic_setup.md';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const BasicCounterContainer = () => (
	<div>
		<h1>React & Redux Basic Counter Example</h1>
		<div className={CLASSNAME.demoColumnWrapper}>
			<div className={CLASSNAME.demoColumn}>
				<CounterContainer />
			</div>
			<div className={CLASSNAME.demoColumn}>
				<Instructions content={content} />
			</div>
		</div>
	</div>
);

export default BasicCounterContainer;
