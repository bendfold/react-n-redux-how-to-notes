// FRAMEWORK
import React from 'react';
import { Link } from 'react-router-dom';
// CONSTANTS
import { CLASSNAME } from '../../constants';
import { MAIN_NAV_ITEMS } from '../../api';


const mainNavItems = MAIN_NAV_ITEMS.map((navItem) => {
	return (<li key={navItem.label} className={CLASSNAME.mainNavItem}>
		<Link
			to={navItem.link}
			className={CLASSNAME.mainNavLink}
			key={navItem.id}
		>
			{navItem.label}
		</Link>
	</li>);
});

const Navigation = () => (
	<nav>
		<ul className={CLASSNAME.mainNav}>
			{mainNavItems}
		</ul>
	</nav>
);

export default Navigation;
