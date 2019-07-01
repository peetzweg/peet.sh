import React from "react";
import Link from "../components/Terminal/Link";
import Prompt from "../components/Terminal/Prompt";
import Executable from "../components/Terminal/Executable";
import Profiles from "../components/Section/Profiles";
import Projects from "../components/Section/Projects";
import Documents from "../components/Section/Documents";
import PixelMe from "../images/meBig.png";

import { Helmet } from "react-helmet";
import {
  BackgroundColor,
  FontColor,
  SelectionColor
} from "../components/Colors";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${BackgroundColor}
  }
  ::selection {
    background: ${SelectionColor};
  }
`;

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${BackgroundColor};
  color: ${FontColor};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 16px;
`;

const PixelMeImage = styled.img`
  image-rendering: pixelated;
  width: 10vw;
  min-width: 100px;
  zindex: 10;
  position: fixed;
  bottom: 0;
  right: 16px;
  margin: 0;
`;

const IndexPage = () => (
  <>
    <GlobalStyle />

    <Page>
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

      <div>
        <Prompt path={"~"} command={"cat"} args={"./README.md"} />
        # Hi there,
        <br />
        <br />I am Phil, people tend to call me Polo. As a master's degree
        computer scientist I lived a lot of my life inside terminals. I enjoy
        writing clean code and learning about new technologies to solve hard
        problems.
        <br />
        <Link href="/diy">As a hobby I build furniture.</Link>
        <br />
        <br />
        <Prompt path={"~"} command={"ls"} args={"documents/"} />
        <Documents />
        <br />
        <Prompt path={"~"} command={"ls"} args={"bin/"} />
        <Executable name={"mailMe"} url={"mailto:phil.czek@gmail.com"} />
        <br />
        <br />
        <Prompt path={"~"} command={"ls"} args={"profiles/"} />
        <Profiles />
        <br />
        <Prompt path={"~"} command={"ls"} args={"-l projects/"} />
        <Projects />
        <br />
        <Prompt path={"~"} />
        <br />
      </div>
    </Page>
  </>
);

export default IndexPage;
