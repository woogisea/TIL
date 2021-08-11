import React from 'react';
import styled from 'styled-components';
import logo  from '../img/logo.png';
import menu from '../img/menu.png';
import close from '../img/close.png';

const WebsiteHeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 40px 100px;

    #menu {
        visibility: hidden;
    }

    @media (max-width : 991px) {
        padding: 40px;
        ul {
            display: none;
        }

        #menu {
            visibility: visible;
            z-index: 1000;
        }
    }
`;
const NavBlock = styled.ul`
    list-style: none;

    li {
        color : white;
        display: inline-block;
        font-weight: 500;
        margin-left: 40px;
    }
`;


const WebsiteHeader = ({ value, onClick }) => {
    return (
        <WebsiteHeaderBlock>
            <img src={logo} alt="logo"/>
            {value === true ? (
                <img src={close} alt="close" id = "menu" onClick = {onClick}/>
            ) : (
                <img src={menu} alt="menu" id = "menu" onClick = {onClick}/>
            )}
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