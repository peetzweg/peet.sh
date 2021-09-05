import React from 'react'
import TPCIssues from '../Data/TPCIssues'
import List from '../Terminal/List'
import SoftLink from "../Terminal/SoftLink"


const ThePoloClub = () => {
  return (
    <List long name={'ThePoloClubIssues'}>
      {TPCIssues.map(issue => (
        <SoftLink
          verbose={false}
          key={`${issue.title}_project`}
          title={issue.title}
          url={issue.url}
        />
      ))}
    </List>
  )
}

export default ThePoloClub
