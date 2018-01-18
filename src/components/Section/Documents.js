import React from 'react'

import List from '../Terminal/List'
import File from '../Terminal/File'
import Resume from '../../documents/resume_poloczek_philip.pdf'

const Documents = () => {
  return (
    <List name={'Documents'}>
      <File name={'resume_poloczek.pdf'} url={Resume} />
    </List>
  )
}

export default Documents
