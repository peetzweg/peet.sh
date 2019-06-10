import React from 'react'
import Table01 from '../images/DIY/Table01.jpg'
import Curtain01 from '../images/DIY/Curtain01.jpg'
import Rack01 from '../images/DIY/Rack01.jpg'
import Rack02 from '../images/DIY/Rack02.jpg'
import Rack03 from '../images/DIY/Rack03.jpg'
import Lamp01 from '../images/DIY/Lamp01.jpg'
import Lamp02 from '../images/DIY/Lamp02.jpg'
import { Helmet } from 'react-helmet'
import Photo from '../components/DIY/Photo'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: 'auto',
  },
  content: {
    display: "grid",
    gridGap:"10px",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
    // gridAutoRows: "40px"
 }
}

const IndexPage = () => (
  <div style={styles.container}>
    <Helmet>
      <link rel="stylesheet" href="./diy.css" type="text/css" />
    </Helmet>
    <div style={styles.content}>
      <Photo src={Table01} />
      <Photo src={Lamp01} />
      <Photo src={Curtain01} />
      <Photo src={Lamp02} />
      <Photo src={Rack01} />
      <Photo src={Rack03} />
      <Photo src={Rack02} />
    </div>
  </div>
)

export default IndexPage
