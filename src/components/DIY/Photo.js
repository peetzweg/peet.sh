import React from 'react'

const styles = {

}

const Photo = ({src, style, ...rest}) => {
  return (
    <div>
    <img className={'photo'} style={styles.image} src={src} alt=""/>
    </div>
  )
}

export default Photo
