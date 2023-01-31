import 'normalize.css';

import styled from 'styled-components';

import loadable from '@loadable/component';
const OtherComponent = loadable(
  () => import('../../components/sketches/ChromieSquiggle')
);

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => (
  <>
    <Container>
      <OtherComponent />
    </Container>
  </>
);

export default IndexPage;
