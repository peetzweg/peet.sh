import styled from 'styled-components';
import {
  BackgroundColor,
  FontColor,
  SelectionColor,
} from './theme/home/Colors';

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    flex: 1;
  }
`;

export const TerminalContainer = styled.div`
  font-family: 'Noto Sans Mono', monospace;
  border-radius: 0px;
  min-height: calc(100vh - 32px);
  background-color: ${BackgroundColor};
  padding: 16px;
  ::selection {
    background: ${SelectionColor};
  }
`;

export const Terminal = styled.div`
  color: ${FontColor};
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PixelMeImage = styled.img`
  image-rendering: pixelated;
  width: 10vw;
  min-width: 100px;
  z-index: 10;
  position: fixed;
  bottom: 0;
  right: 16px;
  margin: 0;
`;

export const Window = styled.iframe`
  border: none;
  margin: none;
  padding: none;
  height: calc(100vh - 15px - 15px);
`;

export default () => null;
