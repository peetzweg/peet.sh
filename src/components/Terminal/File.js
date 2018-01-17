import React from 'react'
import { FileColor } from '../Colors'

const styles = {
  file: {
    color: FileColor,
    textDecoration: 'none',
  }
}

const File = ({name, url, ...rest}) => {
  return (
    <span {...rest}>
      <a
        style={styles.file}
        href={url}
      >
        {name}
      </a>
    </span>
  )
}

export default File
