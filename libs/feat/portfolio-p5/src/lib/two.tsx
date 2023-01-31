import styled from 'styled-components';

import loadable from '@loadable/component';
const OtherComponent2 = loadable(
  () => import('../../components/sketches/Subscapes')
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
      <OtherComponent2 />
    </Container>
  </>
);

export default IndexPage;
