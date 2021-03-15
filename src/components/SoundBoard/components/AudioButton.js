import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-family: Calibri, sans-serif;
  font-size: 1rem;
  height: 3rem;
  padding: 0 ${props => props.isWideMiku ? '10rem' : '2rem'};
  margin-right: 2rem;
  border-radius: 2rem;
  color: #000000;
  opacity: 0.8;
  transition: padding 2s;
`;

const AudioButton = ({ src }) => {
  const [mikuClicked, setMikuClicked] = useState(false);

  const buttonLabelArr = src.split("/");
  const buttonLabelString = buttonLabelArr[buttonLabelArr.length - 1].split(
    "."
  )[0];
  const buttonLabel = buttonLabelString.includes("_")
    ? buttonLabelString.replaceAll("_", " ")
    : buttonLabelString;

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          document.getElementById(buttonLabelString).play();
          buttonLabelString === "wide_miku" && setMikuClicked(true);
        }}
        isWideMiku={mikuClicked}
      >
        {buttonLabel}
      </Button>
      <audio id={buttonLabelString}>
        <source src={src} />
      </audio>
    </React.Fragment>
  );
};

export default AudioButton;
