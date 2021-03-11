import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationButtonProps } from '../types';

const NavigationButton = (props: NavigationButtonProps) => {
	const [labelVisible, setLabelVisible] = React.useState<boolean>(false);

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
			<span
				id={props.id}
				className="link-button material-icons"
				onMouseEnter={() => {
					setLabelVisible(true);
				}}
				onMouseLeave={() => {
					setLabelVisible(false);
				}}
			>
				{props.icon}
			</span>
			<span className="link-button-label" style={{ opacity: labelVisible ? 1 : 0 }}>
				{props.label}
			</span>
		</Link>
	);
};

export default NavigationButton;
