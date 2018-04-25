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
	return (<ul className={CLASSNAME.counterItemList}>
			{
				Object.keys(counterCollection).reverse().map((key) => {
					const counter = counterCollection[key];
					const removeButton = onRemoveClick ? (<li className={CLASSNAME.counterRemoveItem}><button onClick={() => (onRemoveClick(counter.id, reducerName))} className={CLASSNAME.counterCtrlButton}>Remove</button></li>) : null;
					return (
						<li key={counter.id} className={CLASSNAME.counterItem}>
							<div className={CLASSNAME.counterComponent}>
								<p className={CLASSNAME.counterItemCount}>Count: {counter.count}</p>
								<ul className={CLASSNAME.counterCtrlList}>
									<li className={CLASSNAME.counterCtrlItem}>
										<button onClick={() => (onUpClick(counter.id, reducerName))} className={CLASSNAME.counterCtrlButton}>
											Up
										</button>
									</li>
									<li className={CLASSNAME.counterCtrlItem}>
										<button onClick={() => (onDownClick(counter.id, reducerName))} className={CLASSNAME.counterCtrlButton}>
											Down
										</button>
									</li>
									{/* Conditional button*/}
									{removeButton}
								</ul>
							</div>
						</li>
					);
				})

			}
		</ul>);
};

export default CounterList;
