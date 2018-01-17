import React from 'react'
import { ExecutableColor } from '../Colors'

const styles = {
  executable: {
    color: ExecutableColor,
    textDecoration: 'none',
  }
}

const Executable = ({name, url, ...rest}) => {
  return (
    <span {...rest}>
      <a
        style={styles.executable}
        href={url}
      >
        {name}
      </a>
      *
    </span>
  )
}

export default Executable
