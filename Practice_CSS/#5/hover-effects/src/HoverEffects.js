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
    font-weight: bold;
    transition: 0.8s;
    position: relative;
    overflow: hidden;

    &.btn1, &.btn2 {
        color: #3498db;

        &:hover {
            color: white;
        }
    }

    &.btn3, &.btn4 {
        color: white;

        &:hover {
            color: #3498db;
        }
    }

    &::before {
        content: "";
        position: absolute;
        background: #3498db;
        width: 100%;
        left: 0;
        height: 0%;
        z-index: -1;
        transition: 0.8s;
    }


    &.btn1::before, &.btn3::before {
        top: 0;
        border-radius: 0 0 50% 50%;
    }

    &.btn2::before, &.btn4::before {
        bottom: 0;
        border-radius: 50% 50% 0 0;
    }
    
    &.btn3::before, &.btn4::before {
        height: 180%; 
    }
    

    &.btn1:hover::before, &.btn2:hover:before {
        height: 180%;
    }

    &.btn3:hover::before, &.btn4:hover:before {
        height: 0%;
    }


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