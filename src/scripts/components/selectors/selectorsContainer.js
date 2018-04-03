// FRAMEWORK
import React from 'react';
// LIBS
import uuidv4 from 'uuid/v4';
// COMPONENTS
import Instructions from '../instructions/Instructions';
// CONTENT
import content from '../../../content/markdown/selectors.md';

const selectorsContainer = () => ([
	<h1 key={uuidv4()}>React & Redux - Selectors</h1>,
	<Instructions key={uuidv4()} content={content} />,
]);

export default selectorsContainer;