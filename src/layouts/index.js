import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './atem.css'

const styles = {
  container: {
    backgroundColor: '#4B4B4B',
    color: '#D9D9D9',
    imageRendering: 'pixelated',
    fontSize: '20px',
    fontFamily: 'FantasqueSansMonoRegular, serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
  }
}

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>atem.io / Philip Poloczek</title>
      <meta name='description' content='Sample' />
      <meta name='keywords' content='sample, something' />
      <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/fantasque-sans-mono" type="text/css" />
    </Helmet>
    <div style={styles.container}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
