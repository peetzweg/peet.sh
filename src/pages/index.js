import React from 'react'
import Link from 'gatsby-link'
import Prompt from '../components/Terminal/Prompt'
import File from '../components/Terminal/File'
import Executable from '../components/Terminal/Executable'
import Profiles from '../components/Section/Profiles'
import Resume from '../documents/resume_poloczek_philip.pdf'

const IndexPage = () => (
  <div>
    <Prompt path={'~'} command={'cat'} args={'./README.md'} />
    # Hi there,<br />

    I am Phil, people tend to call me Polo.
    As a master's degree computer scientist I lived a lot of my life inside terminals. I enjoy writing clean code and
    learning about new technologies to solve hard problems.
    <br />
    
    <Prompt path={'~'} command={'ls'} args={'profiles/'} />
    <Profiles />
    <br />

    <Prompt path={'~'} command={'ls'} args={'-l projects/'} />
    <br />

    <Prompt path={'~'} command={'ls'} args={'documents/'} />
    <File name={'resume.pdf'} url={Resume} />
    <br />

    <Prompt path={'~'} command={'ls'} args={'bin/'} />
    <Executable name={'mailMe'} url={'mailto:phil.czek@gmail.com'} />
    <br />
  </div>
)

export default IndexPage
