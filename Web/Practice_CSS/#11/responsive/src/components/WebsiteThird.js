import React from 'react';
import styled from 'styled-components';
import banner2 from '../img/banner2.jpg';

const WebsiteThirdBlock = styled.div`
    width: 100%;
    position: relative;
    height: 700px;
    z-index: 1000;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 700px;
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 500px;
        background : linear-gradient(to bottom, #111, transparent);
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 400px;
        z-index: 1;
        background : linear-gradient(to top, #111, transparent);
    }
`;

const WebsiteThird = () => {
    return (
        <WebsiteThirdBlock>
            <img src={banner2} alt="banner2"/>
        </WebsiteThirdBlock>
    );
};

export default WebsiteThird;