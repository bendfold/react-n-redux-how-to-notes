// FRAMEWORK
import React from 'react';

const FetchErrorContainer = ({ message }) => (
	<div>
		<p>Could not fetch counters. {message}</p>
	</div>
);

export default FetchErrorContainer;
