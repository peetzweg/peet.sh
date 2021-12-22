import "normalize.css";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import PixelMe from "../../images/meSummer.png";
import {
  GlobalStyle,
  PixelMeImage
} from "./styles";
import TerminalComponent from "./Terminal";
import Writings from "./Writings";

const Page = styled.div`
  display:flex;
  width:100vw;
  min-height:100vh;
  flex-direction:row;
  justify-content:space-between;
  flex-wrap:wrap;
  & > * {
    flex: 1;
  }
`

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>atem.io / Philip Poloczek</title>
        <meta
          name="description"
          content="This is the personal website of Philip Poloczek"
        />
        <meta name="keywords" content="developer, profile, resume" />
        <link
          rel="stylesheet"
          media="screen"
          href="https://fontlibrary.org/face/fantasque-sans-mono"
          type="text/css"
        />
      </Helmet>

      <PixelMeImage src={PixelMe} alt="" />
      <Page>
        <Writings />
        <TerminalComponent />
      </Page>
    </>
  );
}


export default IndexPage;
