import { ExecutableColor, LinkHoverColor } from "../Colors";
import styled from "styled-components";

export default styled.a`
  color: ${ExecutableColor};
  text-decoration: none;
  &:hover {
    background-color: ${LinkHoverColor};
  }
`;
