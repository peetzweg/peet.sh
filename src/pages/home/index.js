import "normalize.css";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import PixelMe from "../../images/meSummer.png";
import { GlobalStyle, PixelMeImage } from "./styles";
import TerminalComponent from "./Terminal";
import Writings from "./Writings";

const Page = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    flex: 1;
  }
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>peet.sh / Philip Poloczek</title>
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

      <Page>
        <div style={{ position: "fixed", top: 16, left: 16 }}>◠◠</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <div></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",

              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>peet.sh /</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <br />
                  <a href={"/software"}>
                    <div>software</div>
                  </a>
                  <a href={"/client-work"}>
                    <div>client-work</div>
                  </a>
                  <a href={"/hardware"}>
                    <div>hardware</div>
                  </a>
                  <div>profiles /</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <br />

                  <br />

                  <br />

                  <br />
                  <a href={"https://github.com/peetzweg"}>
                    <div>github</div>
                  </a>
                  <a href={"https://twitter.com/peetzweg"}>
                    <div>twitter</div>
                  </a>
                  <a href={"https://www.linkedin.com/in/peetzweg/"}>
                    <div>linkedin</div>
                  </a>
                  <a href={"https://www.strava.com/athletes/18353420"}>
                    <div>strava</div>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <div>scroll for old website</div>
              <div>↓</div>
            </div>
          </div>
        </div>
      </Page>
      <Page>
        <PixelMeImage src={PixelMe} alt="" />
        <Writings />
        <TerminalComponent />
      </Page>
    </>
  );
};

export default IndexPage;
