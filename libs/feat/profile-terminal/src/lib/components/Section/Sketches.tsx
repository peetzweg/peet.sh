import React from 'react'

import SoftLink from '../Terminal/SoftLink'
import List from '../Terminal/List'
import SketchesData from '../Data/sketches'

const Sketches = () => {
  return (
    <List name={'Sketches'}>
      {SketchesData.map(profile => (
        <SoftLink
          key={`${profile.title}_Profile`}
          title={profile.title}
          url={profile.url}
        />))}
    </List>
  )
}

export default Sketches
