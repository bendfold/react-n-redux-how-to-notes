// FRAMEWORK
import React from 'react';

const FetchErrorContainer = ({ message }) => (
	<div>
		<p>Could not fetch counters. {message}</p>
		{/* <button onClick={onRetry}>Retry</button> */}
	</div>
);

export default FetchErrorContainer;
