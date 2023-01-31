import React from "react";

import SoftLink from "../Terminal/SoftLink";
import List from "../Terminal/List";
import ProjectData from "../Data/projects";

const Projects = () => (
  <List long name={"Projects"}>
    {ProjectData.map(project => (
      <SoftLink
        verbose={false}
        key={`${project.title}_project`}
        title={
          project.description
            ? `${project.title.toUpperCase()} - ${project.description}`
            : `${project.title.toUpperCase()}`
        }
        url={project.url}
      />
    ))}
  </List>
);

export default Projects;
