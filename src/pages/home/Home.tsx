import React from 'react';
import './_home.scss';
import { Link } from 'react-router-dom';
import NavigationButton from './components/NavigationButton';

const Home = () => {
	return (
		<div id="root">
			<div className="container">
				<h1 className="name">Marius Sørensen Dreyer</h1>
				<div className="link-button-container">
					<NavigationButton to="/projects" icon="handyman" label="projects" />
					<NavigationButton to="/portfolio" icon="photo_camera" label="portfolio" />
				</div>
				<div className="social-link-container">
					<a
						className="social-link"
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/mariussd/"
					>
						linkedin
					</a>
					<a
						className="social-link"
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/marius.dreyer/"
					>
						instagram
					</a>
					<a className="social-link" target="_blank" rel="noreferrer" href="https://github.com/mariussd">
						github
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
