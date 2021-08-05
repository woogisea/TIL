import React from 'react';
import styled from 'styled-components';

const HoverEffectsBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
`;
const HoverButton = styled.button`
    &+&{
        margin-left: 1rem;
    }
    padding: 0.5rem;
    border: 1px solid #3498db;
    background : none;
    color: white;
    font-weight: bold;
    /* transition: 0.8s;
    position: relative;
    overflow: hidden; */


    /* &::before {
        content: "";
        position: absolute;
        left: 0;
        height: 0%;
        width: 100%;
        background-color: #3498db;
        z-index: -1;
        transition: 0.8s;
    } */


`;

const HoverEffects = () => {
    return (
        <HoverEffectsBox>
            <HoverButton className = "btn1">Hover Me</HoverButton>
            <HoverButton className = "btn2">Hover Me</HoverButton>
            <HoverButton className = "btn3">Hover Me</HoverButton>
            <HoverButton className = "btn4">Hover Me</HoverButton>
        </HoverEffectsBox>
    );
};

export default HoverEffects;