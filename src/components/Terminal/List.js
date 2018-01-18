import React from 'react'

const styles = {
  longList: {},
  shortList: {
    element: {
      marginRight: 64
    }
  },
}

const List = ({name, long, children, ...rest}) => {
  if (!Array.isArray(children)) {
    children = [children]
  }

  if (long) {
    return (
      <div {...rest}>
        {children.map((child, index) => (
          <div key={`${name}_entry_${index}`}>{child}</div>))}
      </div>
    )
  } else {
    return (
      <div {...rest}>
        {children.map((child, index) => (
          <span key={`${name}_entry_${index}`} style={styles.shortList.element}>{child}</span>))}
      </div>
    )
  }
}

export default List