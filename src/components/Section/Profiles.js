import React from 'react'

import SoftLink from '../Terminal/SoftLink'

const profiles = [
  {title: 'LinkedIn', url: 'https://www.linkedin.com/in/philip-poloczek-1b3202125/'},
  {title: 'GitHub', url: 'GitHub'},
  {title: 'STRAVA', url: 'https://www.strava.com/athletes/18353420'},
  {title: 'Instagram', url: 'https://www.instagram.com/naolimao/'},
]

const styles = {
  link: {
    marginRight: 64
  }
}

const Profiles = () => {
  return (
    <div>
      {profiles.map(profile => (<SoftLink style={styles.link} title={profile.title} url={profile.url} />))}
    </div>
  )
}

export default Profiles
