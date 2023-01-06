import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;

export const FlexDirectionRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const FlexDirectionColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`