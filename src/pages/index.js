import React from 'react'
import Link from 'gatsby-link'
import Prompt from '../components/Terminal/Prompt'
import File from '../components/Terminal/File'
import Executable from '../components/Terminal/Executable'
import Profiles from '../components/Section/Profiles'
import Projects from '../components/Section/Projects'
import Resume from '../documents/resume_poloczek_philip.pdf'
import PixelMe from '../images/me.png'

const styles = {
  container: {},
  content: {},
  pixelMe: {
    width: '10vw',
    position: 'absolute',
    bottom: 0,
    right: 16,
    zIndex: 0,
  }
}

const IndexPage = () => (
  <div style={styles.container}>
    <div style={styles.content}>
      <Prompt path={'~'} command={'cat'} args={'./README.md'} />
      # Hi there,<br />

      I am Phil, people tend to call me Polo.
      As a master's degree computer scientist I lived a lot of my life inside terminals. I enjoy writing clean code and
      learning about new technologies to solve hard problems.
      <br /><br />

      <Prompt path={'~'} command={'ls'} args={'profiles/'} />
      <Profiles />
      <br />

      <Prompt path={'~'} command={'ls'} args={'-l projects/'} />
      <Projects />
      <br />

      <Prompt path={'~'} command={'ls'} args={'documents/'} />
      <File name={'resume.pdf'} url={Resume} />
      <br />

      <Prompt path={'~'} command={'ls'} args={'bin/'} />
      <Executable name={'mailMe'} url={'mailto:phil.czek@gmail.com'} />
      <br />
    </div>

    <img style={styles.pixelMe} src={PixelMe} />
  </div>
)

export default IndexPage
