import React from 'react';
import styled from 'styled-components';
import banner3 from '../img/banner3.jpg';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';

const WebsiteFinalBlock = styled.div`
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

`;


const WebsiteFinal = ({children}) => {
    return (
        <WebsiteFinalBlock>
            <img src={banner3} alt="banner3"/>
            {children}
        </WebsiteFinalBlock>
    );
};

export default WebsiteFinal;