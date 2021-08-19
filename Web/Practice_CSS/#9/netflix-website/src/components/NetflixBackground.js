import React from 'react';
import styled from 'styled-components';
import bg from '../img/bg.jpg';

const NetflixBackgroundBlock = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`;
const NetflixBackground = () => {
    return (
        <NetflixBackgroundBlock>
            <img src={bg} alt="background"/>
        </NetflixBackgroundBlock>
    );
};

export default NetflixBackground;