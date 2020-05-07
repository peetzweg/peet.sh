import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CaretColor, DirectoryColor, FontColor, PromptSymbolColor } from "../../theme/home/Colors";

const Path = styled.div`
  color: ${DirectoryColor};
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PromptSymbol = styled.span`
  color: ${PromptSymbolColor};
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Caret = styled.span`
  background-color: ${CaretColor};
  width: 0.6rem;
  heigth: 1rem;

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

const Input = styled.pre`
  all: unset;
  color: ${FontColor};
  white-space: pre;
`;

const useKeyboardInput = () => {
  const [value, setValue] = useState("");
  const updateValue = ({ key, code }) => {
    if (key.length === 1) {
      return setValue(v => v.concat(key));
    } else {
      switch (code) {
        case "Backspace":
          return setValue(v => v.substring(0, v.length - 1));
        case "Space":
          return setValue(v => v.concat(" "));
        case "Enter":
          return setValue(() => "");
        default:
          return;
      }
    }
  };

  useEffect(() => {
    const listener = document.addEventListener("keyup", updateValue);
    return () => document.removeEventListener(listener);
  }, []);

  return value;
};

const InputPrompt = ({ path = "~", command, args, ...rest }) => {
  const value = useKeyboardInput();
  return (
    <div {...rest}>
      <Path>{path}</Path>
      <InputContainer>
        <PromptSymbol>❯</PromptSymbol>
        <Input>{value}</Input>
        <Caret />
      </InputContainer>
    </div>
  );
};

export default InputPrompt;
