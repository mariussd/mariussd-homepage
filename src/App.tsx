import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Projects from './pages/projects/Projects';

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
