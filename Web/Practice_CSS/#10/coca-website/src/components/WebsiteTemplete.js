import React from 'react';
import styled from 'styled-components';

const WebsiteTempleteBlock = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #161616;

    .halfCircle {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #e51e2a;
        clip-path: circle(70% at right -20%);
    }
`;

const MenuBlock = styled.div`
    position: absolute;
    background-color: #e84118;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;
        padding: 0;

        li {
            color: white;
            font-size: 2rem;
            margin: 3rem 0;
            text-align : center;
        }
    }
`;
const WebsiteTemplete = ({children, value}) => {
    return (
        <WebsiteTempleteBlock>
            {value === true && (
                <MenuBlock>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>What's New</li>
                        <li>Contact</li>
                    </ul>
                </MenuBlock>
            )}
            <div className="halfCircle"></div>
            {children}
        </WebsiteTempleteBlock>
    );
};

export default WebsiteTemplete;