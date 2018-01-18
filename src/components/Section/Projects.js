import React from 'react'

import SoftLink from '../Terminal/SoftLink'
import List from '../Terminal/List'
import { ProjectData } from '../Data'

const Projects = () => {
  return (
    <List
      long
      name={'Projects'}
    >
      {ProjectData.map(project => (
        <SoftLink
          verbose
          key={`${project.title}_Project`}
          title={project.title}
          url={project.url}
        />))}
    </List>
  )
}

export default Projects
