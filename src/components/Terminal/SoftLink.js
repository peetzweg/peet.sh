import React from 'react'
import { LinkColor } from '../Colors'

const styles = {
  link: {
    color: LinkColor,
    textDecoration: 'none',
  }
}

const SoftLink = ({verbose, title, url}) => {
  return (
    <span>
      <a
        style={styles.link}
        href={url}
      >
        {title}
      </a>
      @
      {verbose
        ? <span>{` -> ${url}`}</span>
        : null
      }
    </span>
  )
}

export default SoftLink
