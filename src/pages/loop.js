import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Colors } from "../theme/loop";
import DemoGif from "../images/loop/demo.gif";
import AppIconFile from "../images/loop/AppIcon.png";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100vw;
  min-height: 100vh;
  padding: 40px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-areas: "demo info";
  @media (max-width: 720px) {
    grid-template-areas:
      "demo"
      "info";
  }
`;

const DemoContainer = styled.div`
  grid-area: demo;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InfoContainer = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > * {
    margin-bottom: 10px;
  }
`;

const InfoTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  font-family: "Roboto Mono", monospace;
`;

const InfoSubtitle = styled.div`
  font-size: 1.5em;
  text-align: center;
  font-family: "Roboto Mono", monospace;
`;

const Button = styled.a`
  border: 1px solid ${Colors.accent};
  padding: 0.5em 1em;
  text-transform: uppercase;
  border-radius: 2px;
  font-family: "Roboto Mono", monospace;

  text-decoration: none;
  color: inherit;
  font-weight: bold;
  background-color: ${Colors.accent};
  &:hover {
    background-color: ${Colors.selection};
  }
`;

const AppIcon = styled.image`
  margin: 0;
`;

const LoopPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>loop / Keep Track of Your Social Interactions</title>
      <meta
        name="description"
        content="loop Mac OS App to Keep Track of Your Social Interactions"
      />
      <meta
        name="keywords"
        content="app, mac, download, social, interactions"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <PageContainer>
      <GridContainer>
        <DemoContainer>
          <img src={DemoGif} style={{ margin: 0 }} />
        </DemoContainer>
        <InfoContainer>
          <img src={AppIconFile} />

          <InfoTitle>loop for Mac OS</InfoTitle>
          <InfoSubtitle>Keep Track of Your Social Interactions</InfoSubtitle>
          <Button href="https://s3.eu-central-1.amazonaws.com/atem.io/app/mac/loop.dmg">
            Download for free
          </Button>
        </InfoContainer>
      </GridContainer>
    </PageContainer>
  </>
);

export default LoopPage;
