import React from "react";
import { ExecutableColor, LinkHoverColor } from "../../theme/home/Colors";
import styled from "styled-components";

const Link = styled.a`
  color: ${ExecutableColor};
  text-decoration: none;
  &:hover {
    background-color: ${LinkHoverColor};
  }
`;

const Executable = ({ name, url, ...rest }) => {
  return (
    <span {...rest}>
      <Link href={url}>{name}</Link>*
    </span>
  );
};

export default Executable;
