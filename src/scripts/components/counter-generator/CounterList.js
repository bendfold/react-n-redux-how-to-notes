// FRAMEWORK
import React from 'react';
// COMPONENTS
import CounterContainer from '../counter/CounterContainer';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const CounterList = (state) => {
	console.log('counterCollection ___ ', state.counterCollection);
	return (<ul>
			{
				state.counterCollection.map((counter) => {
					return (<li key={counter.id}>
								<div className={CLASSNAME.counterComponent}>
									<h2>Counter</h2>
									<p>Count: {counter.count}</p>
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
							</li>);
					}
				)
			}
		</ul>);
};

export default CounterList;
