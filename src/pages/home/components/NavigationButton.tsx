import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationButtonProps } from '../types';

const NavigationButton = (props: NavigationButtonProps) => {
	return (
		<Link style={{ textDecoration: 'none' }} to={props.to}>
			<span id={props.label} className="link-button material-icons">
				{props.icon}
			</span>
		</Link>
	);
};

export default NavigationButton;
