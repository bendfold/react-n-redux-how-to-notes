// FRAMEWORK
import React from 'react';

const CounterList = (state) => {
	console.log('counterCollection ___ ', state.counterCollection);
	return (<ul>
			{state.counterCollection.map((counter) => {
				return <li>++++ {counter.id}</li>
			})}
		</ul>);
};

export default CounterList;
