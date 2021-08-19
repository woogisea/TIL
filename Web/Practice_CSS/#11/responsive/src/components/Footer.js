import React from 'react';
import styled from 'styled-components';
import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';

const FooterBlock = styled.div`
    width: 100%;
    height: 100px;
    position: absolute;
    /* bottom: 0; */
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 50px;
        height: 50px;
    }

`;
const Footer = () => {
    return (
        <FooterBlock>
            <ul>
                <li><img src={facebook} alt=""/></li>
                <li></li>
                <li></li>
            </ul>
        </FooterBlock>
    );
};

export default Footer;