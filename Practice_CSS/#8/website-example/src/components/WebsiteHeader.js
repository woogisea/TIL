import React from 'react';
import styled from 'styled-components'
import logo from '../img/logo.png';

const WebsiteHeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin-left: 5rem;

    img {
        margin : 1.5rem 0;
    }
`;
const NavBlock = styled.ul`
    display: flex;
    list-style: none;
    font-size: 1.125rem;
    margin-right: 5rem;

    li {
        margin-right: 1.5rem;
        cursor: pointer;

        &:hover {
            color: #95a5a6;
        }
    }
`;

const WebsiteHeader = () => {
    return (
        <WebsiteHeaderBlock>
            <img src={logo} alt="logo"/>
            <NavBlock>
                <li>Home</li>
                <li>Menu</li>
                <li>What's New</li>
                <li>Contact</li>
            </NavBlock>
        </WebsiteHeaderBlock>
    );
};

export default WebsiteHeader;