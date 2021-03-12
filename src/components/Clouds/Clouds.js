import React from 'react';
import styled from 'styled-components';

import LeftCloud from './components/LeftCloud';
import RightCloud from './components/RightCloud';

const CloudContainer = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`;

const LeftContainer = styled.div`
    margin-bottom: -2rem;
`;

const RightContainer = styled.div`
    display: flex;
    margin-bottom: -2rem;
`;

const Clouds = () => (
    <CloudContainer>
        <LeftContainer>
            <LeftCloud />
        </LeftContainer>
        <RightContainer>
            <RightCloud />
        </RightContainer>
    </CloudContainer>
);

export default Clouds;