import React from 'react';
import { ProjectCardProps } from '../types';

const ProjectCard = (props: ProjectCardProps) => {
	const { project } = props;

	return (
		<div>
			<h3>{project.title}</h3>
			<img width="200" height="100" src={project.image} alt={project.title} />
			<p>{project.description}</p>
			<a href={project.link}>{project.link}</a>
		</div>
	);
};

export default ProjectCard;
