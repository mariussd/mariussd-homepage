import React from 'react';
import './_home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div id="root">
			<header>
				<h1 className="name">Marius Sørensen Dreyer</h1>

				<div className="link-button-container">
					<Link to="/projects">
						<span className="link-button material-icons">handyman</span>
					</Link>
					<Link to="/portfolio">
						<span className="link-button material-icons">photo_camera</span>
					</Link>
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
			</header>
		</div>
	);
};

export default Home;
