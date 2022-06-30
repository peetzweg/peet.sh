import { graphql, useStaticQuery } from "gatsby";
import "normalize.css";
import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  color: #37352f;
  text-decoration: underline;
  text-decoration-color: #e9e9e7;
  background-color: green;
`;

const EntryContainer = styled.div`
  width: 100%;
  padding: 0.2em 0.4em;

  &:hover {
    background-color: #efefef;
  }
`;

const Entry = ({ data }) => (
  <EntryContainer>
    <StyledLink
      href={`https://peetzweg.notion.site/${data.raw.id.replaceAll("-", "")}`}
    >
      <div>{data.title}</div>
    </StyledLink>
  </EntryContainer>
);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  font-family: "Fira Sans";
  color: #37352f;
`;

const Writings = () => {
  const data = useStaticQuery(graphql`
    query Notion {
      allNotion {
        edges {
          node {
            id
            raw {
              id
            }
            title
            createdAt
          }
        }
      }
    }
  `);

  return (
    <Container>
      <h3>Writings</h3>
      {data.allNotion.edges
        .map((element) => element.node)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((node) => (
          <Entry data={node} />
        ))}
    </Container>
  );
};

export default Writings;
