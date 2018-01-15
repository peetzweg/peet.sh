import React from 'react'
import Link from 'gatsby-link'
import Prompt from '../components/Terminal/Prompt'
import SoftLink from '../components/Terminal/SoftLink'
import File from '../components/Terminal/File'
import Executable from '../components/Terminal/Executable'

const IndexPage = () => (
  <div>
    <Prompt path={'~'} command={'grep'} args={'strava'} />
    <SoftLink
      verbose
      title={'STRAVA'}
      url={'https://www.strava.com/athletes/18353420'}
    />
    <File name={'resume.pdf'} url={'https://atem.io'} />
    <Executable name={'resume.pdf'} url={'https://atem.io'} />
  </div>
)

export default IndexPage
