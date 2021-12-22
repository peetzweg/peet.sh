import { graphql, useStaticQuery } from 'gatsby';
import "normalize.css";
import React from "react";
import styled from "styled-components";

const Entry = ({ data }) => <div>
    <a href={`https://atemio.notion.site/${data.raw.id.replaceAll("-", "")}`}>
        <div>{data.title}</div>
    </a>
</div>

export const Container = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:flex-start;
  padding:16px;
  font-family:'Fira Sans';
  & > * {
    flex: 1;
  }
`;

const Writings = () => {
    const data = useStaticQuery(graphql`
   query Notion{
	allNotion {
		edges {
			node {
				id
                raw {id}
				title
				createdAt
			}
		}
	}
}
    `);

    return (
        <Container>
            <h3>Writing Practice</h3>
            {data.allNotion.edges
                .map(element => element.node)
                .sort((a, b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .map(node => <Entry data={node} />)
            }
        </Container>
    );
}


export default Writings;
