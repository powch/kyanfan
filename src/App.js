import React from "react";
import { createGlobalStyle } from "styled-components";

import Stars from "./components/Stars";
import Header from './components/Header';
import Clouds from './components/Clouds';
import Lines from './components/Lines';

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
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Stars />
      <Lines />
      <Header />
      <Clouds />
    </React.Fragment>
  );
}

export default App;
