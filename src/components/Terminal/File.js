import React from "react";
import { FileColor, LinkHoverColor } from "../Colors";

import styled from "styled-components";

const Link = styled.a`
  color: ${FileColor};
  text-decoration: none;
  &:hover {
    background-color: ${LinkHoverColor};
  }
`;

const File = ({ name, url, ...rest }) => {
  return (
    <span {...rest}>
      <Link href={url}>{name}</Link>
    </span>
  );
};

export default File;
