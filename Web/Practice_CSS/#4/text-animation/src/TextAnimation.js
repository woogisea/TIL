import React from 'react';
import styled from 'styled-components';

const TextAnimationBox =styled.div`
    position: absolute;
    top: 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;

    span { 
        display: block;
    }

    .text1 {
        color: white;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 0.5rem;
        margin-bottom: 20px;
        animation : text 2s;
        background-color: black;
        position: relative;
    }

    .text2 {
        font-size: 1.2rem;
        color: #10ac84;
        text-transform: uppercase;
    }

    @keyframes text {
        0% {
            margin-bottom: -40px;
        }

        50% {
            letter-spacing: 1rem;
            margin-bottom: -40px;
        }

        80% {
            letter-spacing: 0.7rem;
            margin-bottom: -40px;
        }
    }

`;
const TextAnimation = () => {
    return (
        <>
            <TextAnimationBox>
                <span className="text1">WELCOME IN</span>
                <span className="text2">jaewook</span>
            </TextAnimationBox>
        </>
    );
};

export default TextAnimation;