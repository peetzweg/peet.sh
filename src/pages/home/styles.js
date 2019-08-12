import styled, { createGlobalStyle } from "styled-components";
import {
  BackgroundColor,
  FontColor,
  SelectionColor
} from "../../theme/home/Colors";

export const GlobalStyle = createGlobalStyle``;

export const Page = styled.div`
  padding: 15px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  & > * {
    flex: 1;
  }
`;

export const TerminalContainer = styled.div`
  border-radius: 2px;
  background-color: ${BackgroundColor};

  padding: 16px;
  overflow: scroll;
  max-height: calc(100vh - 15px - 15px);

  ::selection {
    background: ${SelectionColor};
  }
`;

export const Terminal = styled.div`
  color: ${FontColor};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const PixelMeImage = styled.img`
  image-rendering: pixelated;
  width: 10vw;
  min-width: 100px;
  zindex: 10;
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
