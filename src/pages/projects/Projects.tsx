import React from 'react';
import './projects.scss';
import { Project } from './types';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
	const [projects, setProjects] = React.useState<Project[]>();

	React.useEffect(() => {
		fetch('projects.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => res.json())
			.then((json) => setProjects(json.projects));
	}, []);

	return (
		<div className="projects-container">
			<h1 className="projects-header">Prosjekter</h1>
			{projects?.map((project, i) => {
				return <ProjectCard project={project} key={i} />;
			})}
		</div>
	);
};

export default Projects;
