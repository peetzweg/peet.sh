import "normalize.css";
import React from "react";
import Documents from "../../components/Section/Documents";
import Profiles from "../../components/Section/Profiles";
import Projects from "../../components/Section/Projects";
import Sketches from "../../components/Section/Sketches";
import ThePoloClub from "../../components/Section/ThePoloClub";
import Executable from "../../components/Terminal/Executable";
import InputPrompt from "../../components/Terminal/InputPrompt";
import Link from "../../components/Terminal/Link";
import Prompt from "../../components/Terminal/Prompt";
import {
    Page, Terminal,
    TerminalContainer
} from "./styles";

const TerminalComponent = () => (
      <Page>
        <TerminalContainer>
          <Terminal>
            <Prompt path={"~"} command={"cat"} args={"./README.md"} />
            # Hi 👋,
            <br />
            <br />
            I am Philip. I lived a lot of my life inside terminals. I enjoy
            writing clean code and learning about new technologies to solve hard
            problems.
            <br />
            <Link href="/diy">As a hobby I build furniture.</Link>
            <br />
            <Prompt path={"~"} command={"ls"} args={"generative_art_sketches"} />
            <Sketches />
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
);



export default TerminalComponent;
