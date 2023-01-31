import styled from 'styled-components';
import {
  CaretColor,
  DirectoryColor,
  FontColor,
  PromptSymbolColor,
} from '../../theme/home/Colors';

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

const Input = styled.pre`
  all: unset;
  color: ${FontColor};
  white-space: pre;
`;

const InputPrompt = ({ path = '~', ...rest }) => {
  return (
    <div {...rest}>
      <Path>{path}</Path>
      <InputContainer>
        <PromptSymbol>❯</PromptSymbol>
        <Input> </Input>
        <Caret />
      </InputContainer>
    </div>
  );
};

export default InputPrompt;
