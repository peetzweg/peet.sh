import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
          }
          fileAbsolutePath
        }
      }
    }
  }
`
const Node = ({ data }) => {
    const path = "/writing/" + data.fileAbsolutePath.split('/').pop().split('.')[0]
    return (<Link to={path}><h3>{data.frontmatter.title}</h3></Link>)
}

const IndexPage = ({ data }) => {
    const { allMdx: { edges } } = data;
    return (
        <div>
            {edges.map(({ node }) => <Node data={node} />)}
        </div>

    )
}
export default IndexPage
