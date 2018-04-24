// FRAMEWORK
import React from 'react';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const CounterList = ({
	counterCollection,
	onUpClick,
	onDownClick,
	reducerName,
	onRemoveClick
}) => {
	return (<ul>
			{
				Object.keys(counterCollection).reverse().map((key) => {
					const counter = counterCollection[key];
					const removeButton = onRemoveClick ? (<button onClick={() => (onRemoveClick(counter.id, reducerName))}>Remove Counter</button>) : null;
					return (
						<li key={counter.id}>
							<div className={CLASSNAME.counterComponent}>
								<h2>Counter</h2>
								
								{removeButton}
								
								<p>Count: {counter.count}</p>
								<ul>
									<li>
										<button onClick={() => (onUpClick(counter.id, reducerName))}>
											Up
										</button>
									</li>
									<li>
										<button onClick={() => (onDownClick(counter.id, reducerName))}>
											Down
										</button>
									</li>
								</ul>
							</div>
						</li>
					);
				})

			}
		</ul>);
};

export default CounterList;
