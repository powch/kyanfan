import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  margin: 5rem 0 0 0;
  font-family: "Henny Penny", cursive;
  z-index: 10;
  font-size: 12rem;
  color: #f193af;
  text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Translation = styled.p`
  margin: 0;
  font-family: "Henny Penny", cursive;
  z-index: 10;
  font-size: 3rem;
  color: #f193af;
  text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Content = styled.h2`
  margin: 3rem 0 0 0;
  font-family: "Henny Penny", cursive;
  z-index: 10;
  font-size: 10rem;
  color: #f193af;
  text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Kyan-chan</Title>
    <Content>Happy Birthday!</Content>
    <Translation>誕生日おめでとう</Translation>
  </HeaderContainer>
);

export default Header;
