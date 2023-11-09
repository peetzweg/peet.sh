import styled from 'styled-components';
import { ExecutableColor, LinkHoverColor } from '../../theme/home/Colors';

export default styled.a`
  color: ${ExecutableColor};
  text-decoration: none;
  &:hover {
    background-color: ${LinkHoverColor};
  }
`;
