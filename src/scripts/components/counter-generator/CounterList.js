// FRAMEWORK
import React from 'react';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const CounterList = ({
	counterCollection,
	onUpClick,
	onDownClick
}) => {
	return (<ul>
			{
				counterCollection.map((counter) => {
					return (<li key={counter.id}>
								<div className={CLASSNAME.counterComponent}>
									<h2>Counter</h2>
									<p>Count: {counter.count}</p>
									<ul>
										<li>
											<button onClick={() => (onUpClick(counter.id))}>
												Up
											</button>
										</li>
										<li>
											<button onClick={() => (onDownClick(counter.id))}>
												Down
											</button>
										</li>
									</ul>
								</div>
							</li>
						);
					}
				)
			}
		</ul>);
};

export default CounterList;
