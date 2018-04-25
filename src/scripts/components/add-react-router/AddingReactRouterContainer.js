// FRAMEWORK
import React from 'react';
// COMPONENTS
import Instructions from '../instructions/Instructions';
// CONTENT
import content from '../../../content/markdown/adding_react_router.md';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const AddingReactRouterContainer = () => (
	<div>
		<h1>React & Redux - Adding React-Router</h1>
		<div className={CLASSNAME.demoColumnWrapper}>
			<div className={CLASSNAME.infoColumn}>
				<Instructions content={content} />
			</div>
		</div>
	</div>
);

export default AddingReactRouterContainer;
