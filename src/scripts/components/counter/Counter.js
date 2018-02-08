import React from 'react';

const Counter = () => (
	<div claasName="counter-component">
		<h3>Counter</h3>
		<p>Count: </p>
		<ul>
			<li>
				<button onClick={() => (console.log('Up Click'))}>
					Up
				</button>
			</li>
			<li>
				<button onClick={() => (console.log('Down Click'))}>
					Down
				</button>
			</li>
		</ul>
	</div>
);

export default Counter;