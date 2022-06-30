import React from "react";
import styled from "styled-components";
import {
  PromptSymbolColor,
  DirectoryColor,
  CommandColor,
  CaretColor,
} from "../../theme/home/Colors";

const Path = styled.div`
  color: ${DirectoryColor};
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;
`;

const PromptSymbol = styled.span`
  color: ${PromptSymbolColor};
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Command = styled.span`
  color: ${CommandColor};
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Caret = styled.span`
  background-color: ${CaretColor};
  width: 0.6rem;
  height: 1rem;

  animation: blink-animation 1s cubic-bezier(0.215, 0.61, 0.355, 1) alternate
    infinite;

  @keyframes blink-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Arguments = styled.span`
  margin-right: 0.5rem;
`;

const Prompt = ({ path = "~", command, args, ...rest }) => {
  return (
    <div {...rest}>
      <Path>{path}</Path>
      <Input>
        <PromptSymbol>❯</PromptSymbol>
        {command ? <Command>{` ${command}`}</Command> : <Caret />}
        {args ? <Arguments>{` ${args}`}</Arguments> : null}
      </Input>
    </div>
  );
};

export default Prompt;
