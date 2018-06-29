import React from 'react';

import SoftLink from '../Terminal/SoftLink';
import List from '../Terminal/List';
import { ProjectData } from '../Data';

const Projects = () => {
	const formLinkTitle = (project) =>
		window.innerWidth > 500
			? project.description
				? `${project.title.toUpperCase()} - ${project.description}`
				: `${project.title.toUpperCase()}`
			: `${project.title.toUpperCase()}`;

	return (
		<List long name={'Projects'}>
			{ProjectData.map((project) => (
				<SoftLink
					verbose={window.innerWidth > 500}
					key={`${project.title}_Project`}
					title={formLinkTitle(project)}
					url={project.url}
				/>
			))}
		</List>
	);
};

export default Projects;
