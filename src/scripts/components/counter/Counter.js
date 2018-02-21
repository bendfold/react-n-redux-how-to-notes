// FRAMEWORK
import React from 'react';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const Counter = ({
	count,
	onUpClick,
	onDownClick
}) => (
	<div className={CLASSNAME.counterComponent}>
		<h2>Counter</h2>
		<p>Count: {count}</p>
		<ul>
			<li>
				<button onClick={onUpClick}>
					Up
				</button>
			</li>
			<li>
				<button onClick={onDownClick}>
					Down
				</button>
			</li>
		</ul>
	</div>
);

export default Counter;
