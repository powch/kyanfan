import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 0 2rem 0;
`;

const Title = styled.h1`
  margin: 1rem 0 0 0;
  font-family: "Henny Penny", cursive;
  z-index: 10;
  font-size: 5rem;
  color: #f193af;
  text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Translation = styled.p`
  margin: 0;
  font-family: "Henny Penny", cursive;
  z-index: 10;
  font-size: 2rem;
  color: #f193af;
  text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Rinetto Kyandie</Title>
    <Translation>リネット・キャンディ</Translation>
  </HeaderContainer>
);

export default Header;
