import React from 'react';

const Counter = ({
	count,
	onUpClick,
	onDownClick
}) => (
	<div className="counter-component">
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
