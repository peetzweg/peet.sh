import React from 'react'

import SoftLink from '../Terminal/SoftLink'
import List from '../Terminal/List'
import { ProfileData } from '../Data'

const Profiles = () => {
  return (
    <List name={'Profiles'}>
      {ProfileData.map(profile => (
        <SoftLink
          key={`${profile.title}_Profile`}
          title={profile.title}
          url={profile.url}
        />))}
    </List>
  )
}

export default Profiles
