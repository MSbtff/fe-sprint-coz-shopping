import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;

    }
`;

export default function main() {
  return <GlobalStyle></GlobalStyle>;
}
