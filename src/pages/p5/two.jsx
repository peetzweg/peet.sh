import "normalize.css";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";


import loadable from '@loadable/component'
const OtherComponent2 = loadable(() => import('../../components/sketches/Subscapes'))

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height:100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>atem.io / Peetzweg Sketches</title>
            <meta
                name="description"
                content="Generative Art Sketches I've made"
            />
            <meta name="keywords" content="generative, art,processing" />

        </Helmet>
        <Container>
            <OtherComponent2 />
        </Container>
    </>
);

export default IndexPage;
