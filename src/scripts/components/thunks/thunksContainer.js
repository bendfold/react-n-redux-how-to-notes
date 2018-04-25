// FRAMEWORK
import React from 'react';
// LIBS
import uuidv4 from 'uuid/v4';
// COMPONENTS
import Instructions from '../instructions/Instructions';
// CONTENT
import content from '../../../content/markdown/thunks.md';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const Columns = () => (
	<div className={CLASSNAME.demoColumnWrapper}>
		<div className={CLASSNAME.infoColumn}>
			<Instructions key={uuidv4()} content={content} />
		</div>
	</div>
);

const selectorsContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Thunks</h1>,
	<Columns key={uuidv4()} />,
]);

export default selectorsContainer;