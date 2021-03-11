import React from 'react';
import './_home.scss';
import NavigationButton from './components/NavigationButton';
import github from './images/github.svg';
import instagram from './images/instagram.svg';
import linkedin from './images/linkedin.svg';

const Home = () => {
	return (
		<div id="home">
			<div className="container">
				<h1 className="name">Marius Sørensen Dreyer</h1>
				<div className="link-button-container">
					<NavigationButton to="/projects" icon="handyman" id="projects" label="Projects" />
					<NavigationButton to="/portfolio" icon="photo_camera" id="portfolio" label="Portfolio" />
				</div>
				<div className="social-link-container">
					<a
						className="social-link"
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/mariussd/"
					>
						<img src={linkedin} />
					</a>
					<a
						className="social-link"
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/marius.dreyer/"
					>
						<img src={instagram} />
					</a>
					<a className="social-link" target="_blank" rel="noreferrer" href="https://github.com/mariussd">
						<img src={github} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
