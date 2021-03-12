import React from 'react';
import styled from 'styled-components';

const LineContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
`;

const Line = styled.div`
    z-index: 0;
    min-width: .5rem;
    max-width: .5rem;
    height: 100vh;
    background-color: #FFFFFF0A;
    margin: 0;
    margin-left: 5rem;
`;

const Lines = () => (
    <LineContainer>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
    </LineContainer>
);

export default Lines;