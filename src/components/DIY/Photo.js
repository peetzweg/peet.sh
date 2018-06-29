import React from 'react'

const styles = {
  image: {
    maxWidth: '40vw',
    minWidth: '5vw',
  }
}

const Photo = ({src, style, ...rest}) => {
  return (
    <img className={'photo'} style={styles.image} src={src} />
  )
}

export default Photo
