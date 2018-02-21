// FRAMEWORK
import React from 'react';
// CONSTANTS
import {CLASSNAME} from '../../constants';

const CounterGeneratorControls = ({
	onClick
}) => (
	<ul className={CLASSNAME.counterGeneratorControlList}>
		<li>
			<button onClick={onClick}>
				Add a counter
			</button>
		</li>
	</ul>
);

export default CounterGeneratorControls;