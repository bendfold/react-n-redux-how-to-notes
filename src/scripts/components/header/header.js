// Framework
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<h2>Redux driven counter example with React Router</h2>
		<nav>
			<ul>
				<li>
					<Link to='counterViewA'>Counter View A</Link>
				</li>
				<li>
					<Link to='counterViewB'>Counter View B</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;