import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Projects from './pages/projects/Projects';

const App = () => {
	return (
		<Router>
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
		</Router>
	);
};

export default App;
