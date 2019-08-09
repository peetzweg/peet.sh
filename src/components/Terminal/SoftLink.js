import React from "react";
import styled from "styled-components";
import { LinkColor, LinkHoverColor } from "../../theme/home/Colors";

const Link = styled.a`
  color: ${LinkColor};
  text-decoration: none;
  &:hover {
    background-color: ${LinkHoverColor};
  }
`;

const SoftLink = ({ verbose, title, url, ...rest }) => {
  return (
    <span {...rest}>
      <Link href={url}>{title}</Link>@
      {verbose ? <span>{` -> ${url}`}</span> : null}
    </span>
  );
};

export default SoftLink;
