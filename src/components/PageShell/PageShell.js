import React from 'react';
import styled from 'styled-components';

import Stars from "./components/Stars";
import Clouds from './components/Clouds';
import Lines from './components/Lines';

const PageShellContainer = styled.div`
    width: 60rem;
`;

const PageShell = ({ children }) => (
    <PageShellContainer>
        <Stars />
        <Clouds />
        <Lines />
        {children}
    </PageShellContainer>
);

export default PageShell;