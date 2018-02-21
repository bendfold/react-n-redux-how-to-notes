// FRAMEWORK
import React from 'react';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const NoMatch = () => (
	<div className={CLASSNAME.dudRoute}>
		<strong>Error!</strong> No route found matching:
	</div>
);

export default NoMatch;
