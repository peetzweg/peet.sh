import React from 'react'
import Link from 'gatsby-link'
import Prompt from '../components/Terminal/Prompt'
import Executable from '../components/Terminal/Executable'
import Profiles from '../components/Section/Profiles'
import Projects from '../components/Section/Projects'
import Documents from '../components/Section/Documents'
import PixelMe from '../images/me.png'
import { Helmet } from 'react-helmet'

const styles = {
  container: {
    backgroundColor: '#4B4B4B',
    color: '#D9D9D9',
    imageRendering: 'pixelated',
    fontSize: '20px',
    fontFamily: 'FantasqueSansMonoRegular, serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
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
    <Helmet>
      <link rel="stylesheet" href="./atem.css" type="text/css" />
    </Helmet>

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
      <Documents />
      <br />

      <Prompt path={'~'} command={'ls'} args={'bin/'} />
      <Executable name={'mailMe'} url={'mailto:phil.czek@gmail.com'} />
      <br />
    </div>

    <img style={styles.pixelMe} src={PixelMe} />
  </div>
)

export default IndexPage
