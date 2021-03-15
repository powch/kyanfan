import React from "react";
import { createGlobalStyle } from "styled-components";

import PageShell from './components/PageShell';
import Header from './components/Header';
import SoundBoard from './components/SoundBoard/SoundBoard';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: #9286B1;
  }  
  #root {
    height: 100vh;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <PageShell>
        <Header />
        <SoundBoard />
      </PageShell>
    </React.Fragment>
  );
}

export default App;
