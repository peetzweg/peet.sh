import "normalize.css";
import React from "react";
import { Helmet } from "react-helmet";

import Link from "../../components/Terminal/Link";
import Prompt from "../../components/Terminal/Prompt";
import Executable from "../../components/Terminal/Executable";
import InputPrompt from "../../components/Terminal/InputPrompt";

import Profiles from "../../components/Section/Profiles";
import Sketches from "../../components/Section/Sketches";
import Projects from "../../components/Section/Projects";
import Documents from "../../components/Section/Documents";
import ThePoloClub from "../../components/Section/ThePoloClub";
import PixelMe from "../../images/meSummer.png";


import {
  GlobalStyle,
  Page,
  PixelMeImage,
  Terminal,
  TerminalContainer,
} from "./styles";

const IndexPage = () => (
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
      <TerminalContainer>
        <Terminal>
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
          <Prompt path={"~"} command={"ls"} args={"generative_art_sketches"} />
          <Sketches />
          <br />
          <Prompt path={"~"} command={"ls"} args={"-l The\\ Polo\\ Club"} />
          <ThePoloClub />
          <br />
          <Prompt path={"~"} command={"ls"} args={"documents/"} />
          <Documents />
          <br />
          <Prompt path={"~"} command={"ls"} args={"bin/"} />
          <Executable name={"mailMe"} url={"mailto:phil.czek@gmail.com"} />
          <br />
          <Prompt path={"~"} command={"ls"} args={"profiles/"} />
          <Profiles />
          <br />
          <Prompt path={"~"} command={"ls"} args={"-l projects/"} />
          <Projects />
          <br />
          <InputPrompt path={"~"} />
        </Terminal>
      </TerminalContainer>
    </Page>
  </>
);

export default IndexPage;
