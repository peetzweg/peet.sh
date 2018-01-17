import React from 'react'
import { PromptSymbolColor, DirectoryColor, CommandColor } from '../Colors'

const styles = {
  path: {
    color: DirectoryColor,
  },
  prompt: {
    color: PromptSymbolColor,
  },
  command: {
    color: CommandColor,
  }
}

const Prompt = ({path, command, args, ...rest}) => {
  return (
    <div {...rest}>
      <div
        style={styles.path}>
        {path}
      </div>
      <div>
      <span>
        <b
          style={styles.prompt}
        >
          ❯
        </b>
        <b
          style={styles.command}
        >
          {` ${command}`}
        </b>
        {args
          ? <span>{` ${args}`}</span>
          : null
        }
      </span>
      </div>
    </div>
  )
}

export default Prompt
