import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Bernd from "../images/DIY/bernd.jpg";
import Curtain from "../images/DIY/CurtainPole.jpg";
import Lamp from "../images/DIY/Lamp.jpg";
import Rack from "../images/DIY/Rack01.jpg";
import Shades from "../images/DIY/shades.jpg";
import Pottery from "../images/DIY/pottery.jpeg";
import { Typography } from "../theme/diy";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: auto;
  margin: 60px 0;
`;

const Heading = styled.h1`
  ${Typography.heading}
`;
const Title = styled.h3`
  margin: 0;
  position: absolute;
  bottom: -18px;
  right: 60px;
  ${Typography.description};
  color: black;
  font-size: 64px;
`;

const Photo = styled.img`
  margin: 0;
  position: static;
`;

const Grid = styled.div`
  gap: 1px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: stretch;
  justify-content: center;
  flex-basis: 1;
  flex-wrap: wrap;
  @media (max-width: 960px) {
  }
`;
const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: white;
  padding: 60px;
  outline: 1px solid gray;
  /* border: 0.5px solid black; */
  width: min(100vw, 720px);
  z-index: ${(props) => props.zIndex};
`;

const ENTRIES = [
  {
    title: "Shades",
    src: Shades,
  },
  {
    title: "Pot",
    src: Pottery,
  },
  {
    title: "Rack",
    src: Rack,
  },
  {
    title: "Leather easy chair",
    src: Bernd,
  },
  {
    title: "Curtain-hanger",
    src: Curtain,
  },
  {
    title: "Chandelier",
    src: Lamp,
  },
];

const DIYPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>peet.sh</title>
      <meta name="description" content="Built by Peet" />
      <meta name="keywords" content="diy, furniture, self-made" />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Page>
      <Heading>Make Things ↓</Heading>
      <Grid>
        {ENTRIES.map((entry, index, array) => (
          <Frame zIndex={array.length - index}>
            <Photo src={entry.src} />
            {/* <Title>{entry.title}</Title> */}
          </Frame>
        ))}
      </Grid>
    </Page>
  </>
);

export default DIYPage;
