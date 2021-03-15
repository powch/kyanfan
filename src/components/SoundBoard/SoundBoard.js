import React from 'react';
import styled from 'styled-components';

import { Sounds } from '../../assets/sounds';
import AudioButton from './components/AudioButton';

const Container = styled.div`
    z-index: 10;
    position: relative;
    width: 100%;
    background-color: #f193af;
    border-radius: 1rem;
    min-height: 20rem;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const SoundBoard = () => {
    return (
        <Container>
            {Sounds.map(src => <AudioButton src={src} />)}
        </Container>
    )
};

export default SoundBoard;