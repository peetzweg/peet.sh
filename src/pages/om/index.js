import "normalize.css";
import React from "react";
import { Helmet } from "react-helmet";
import { Page } from "./style";
import playlistData from "../../components/Data/playlists";
import format from "date-fns/format";
import styled from "styled-components";

const PlaylistContainer = styled.div`
  display: flex;
  width:100%
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 10px;
`;

const PlaylistContent = styled.div`
  width: 50vw;
  max-width: 400px;
  min-width: 300px;
`;

const PlaylistIframe = styled.iframe`
  width: 100%;
  height: 50vh;
  border: 0;
`;

const PlaylistHeading = styled.h2`
  margin-bottom: 0.5rem;
`;

const PageHeading = styled.h1`
  padding: 0 10px;
`;

const Playlist = ({ playlist, date }) => (
  <PlaylistContainer key={date.toString()}>
    <PlaylistContent>
      <PlaylistHeading>{`${format(date, "LLL")} '${format(
        date,
        "yy"
      )}`}</PlaylistHeading>
      <PlaylistIframe
        src={`https://open.spotify.com/embed/playlist/${playlist}`}
        allowtransparency="true"
        allow="encrypted-media"
      />
    </PlaylistContent>
  </PlaylistContainer>
);

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>atem.io / Hype Mixtapes for Otten's</title>
      <meta
        name="description"
        content="Mixtapes I make for a friend to discover new music."
      />
      <meta name="keywords" content="music, spotify, mixtapes" />
      <link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org/face/fantasque-sans-mono"
        type="text/css"
      />
    </Helmet>
    <Page>
      <PageHeading>Hype Mixtapes for Otten's</PageHeading>
      {playlistData.map(data => (
        <Playlist {...data} />
      ))}
    </Page>
  </>
);

export default IndexPage;
