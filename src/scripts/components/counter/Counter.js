// FRAMEWORK
import React from 'react';
// CONSTANTS
import { CLASSNAME } from '../../constants';

const Counter = ({
	count,
	onUpClick,
	onDownClick
}) => (
	<div className={CLASSNAME.counterComponent}>
		<p className={CLASSNAME.counterItemCount}>Count: {count}</p>
		<ul className={CLASSNAME.counterCtrlList}>
			<li className={CLASSNAME.counterCtrlItem}>
				<button onClick={onUpClick} className={CLASSNAME.counterCtrlButton}>
					Up
				</button>
			</li>
			<li className={CLASSNAME.counterCtrlItem}>
				<button onClick={onDownClick} className={CLASSNAME.counterCtrlButton}>
					Down
				</button>
			</li>
		</ul>
	</div>
);

export default Counter;
