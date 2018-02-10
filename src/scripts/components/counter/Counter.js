import React from 'react';

const Counter = ({
	count,
	onUpClick,
	onDownClick
}) => (
	<div className="counter-component">
		<h3>Counter</h3>
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
