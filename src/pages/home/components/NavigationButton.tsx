import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationButtonProps } from '../types';

const NavigationButton = (props: NavigationButtonProps) => {
	return (
		<Link
			style={{
				textDecoration: 'none',
				textAlign: 'center',
				fontFamily: 'Bebas Neue',
				fontWeight: 400,
			}}
			to={props.to}
		>
			<span id={props.id} className="link-button material-icons">
				{props.icon}
			</span>
			<span style={{ fontSize: 25, color: '#b3b3b8' }}>{props.label}</span>
		</Link>
	);
};

export default NavigationButton;
