// FRAMEWORK
import React from 'react';
// COMPONENTS
import Instructions from '../instructions/Instructions';
// CONTENT
import content from '../../../content/markdown/adding_react_router.md';

const AddingReactRouterContainer = () => (
	<div>
		<h1>React & Redux - Adding React-Router</h1>
		<Instructions content={content} />
	</div>
);

export default AddingReactRouterContainer;
