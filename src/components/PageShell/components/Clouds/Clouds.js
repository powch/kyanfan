import React from 'react';
import styled from 'styled-components';

import Cloud from './components/Cloud';

const CloudContainer = styled.div`
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    max-height: 25rem;
`;

const Clouds = () => (
    <CloudContainer>
        <Cloud />
    </CloudContainer>
);

export default Clouds;