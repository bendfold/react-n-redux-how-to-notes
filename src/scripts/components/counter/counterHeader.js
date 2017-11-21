import React from 'react';

const CounterHeader = ({
	counter
}) => (
	<header>
		<h2>Redux driven counter example</h2>
		<p>Clicked Count Value: {counter}</p>
	</header>
);

export default CounterHeader;
