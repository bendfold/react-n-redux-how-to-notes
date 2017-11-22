// Framework
import React from 'react';
// Components
import CounterHeader from './counterHeader';

const Counter = ({
	counter,
	onUpClick,
	onDownClick
}) => (
	<div className="counter-container">
		<CounterHeader counter={counter} />
		<ul>
			<li>
				<button onClick={() => onUpClick()}>
					Up
				</button>
			</li>
			<li>
				<button onClick={() => onDownClick()}>
					Down
				</button>
			</li>
		</ul>
	</div>
);

export default Counter;
