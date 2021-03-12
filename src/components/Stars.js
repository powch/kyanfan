import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = () => {
  const randomNum = (rawMin, rawMax) => {
    const min = Math.ceil(rawMin);
    const max = Math.floor(rawMax);
    return Math.random() * (max - min) + min;
  };

  const starSize = randomNum(1, 3);
  const smallStar = Math.floor(starSize) === 1;

  const starFrames = keyframes`
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  `;

  const DirectionContainer = styled.div`
    position: absolute;
    top: -50%;
    left: ${randomNum(5, 95)}vw;
    height: 200%;
    max-width: 5rem;
    transform: rotate(${randomNum(-30, -45)}deg);
  `;

  const StarContainer = styled.div`
    z-index: 1;
    height: 100%;
    animation: ${starFrames} ${smallStar ? starSize * 30 : starSize * 10}s
      linear infinite;
    font-size: ${starSize}rem;
    opacity: ${smallStar ? ".5" : "1"};
    color: ${Math.round(Math.random()) === 0 ? "#FEDF98" : "#BDECFB"};
  `;

  return (
    <DirectionContainer>
      <StarContainer>
        <FontAwesomeIcon icon={faStar} />
      </StarContainer>
    </DirectionContainer>
  );
};

const StarGenerator = () => (
  <React.Fragment>
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
    <Stars />
  </React.Fragment>
);

export default StarGenerator;
