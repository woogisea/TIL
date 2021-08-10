import React from 'react';
import name from '../img/name.png';
import styled from 'styled-components';
import { BsFillPlayFill } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';


const NetflixMainBlock = styled.div`
    margin-left: 4.5rem;
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;

    p {
        color: white;
        width: 50%;
    }
`;
const InfoBlock = styled.div`
    display: flex;
`;
const InfoDivide = styled.div`
    color : gray;
    font-size: 1.125rem;

    &+&{
        border-left : 1px solid gray;
        padding-left : 0.7rem;
        padding-right: 0.7rem;
    }

    &:first-child {
        padding-right: 0.7rem;
    }

    span {
        background: red;
        color: white;
        padding: 0 0.3rem;
        font-weight: bold;
    }
`;
const ButtonBlock = styled.div`
    display: flex;
    svg {
        color: white;
        font-size: 1.125rem;
    }

    .first {
        background: red;
        padding: 0.3rem 0.5rem;
        display: flex;
        align-items: center;
        margin-right: 2rem;

        button {
            border: none;
            background: none;
            color : white;
            font-weight: bold;
            font-size: 1.125rem;
            cursor: pointer;
        }

        &:hover {
            opacity: 0.8;
        }
    }

    .second {
        display: flex;
        align-items: center;

        span {
            font-size: 1.125rem;
            font-weight: bold;
            color: white;
            margin-left: 0.5rem;
        }
    }
`;

const NetflixMain = () => {
    return (
        <NetflixMainBlock>
            <img src={name} alt="name" width = "250px" height = "200px"/>
            <InfoBlock>
                <InfoDivide>2020</InfoDivide>
                <InfoDivide><span>12+</span></InfoDivide>
                <InfoDivide>1h 55 min</InfoDivide>
                <InfoDivide>Action</InfoDivide>
            </InfoBlock>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad incidunt sit sunt sequi rem harum adipisci rerum, maxime nobis odio asperiores labore omnis minus aperiam, fuga, ex eligendi tempore reiciendis.</p>
            <ButtonBlock>
                <div className="first">
                    <BsFillPlayFill /><button>PLAY</button>
                </div>
                <div className="second">
                    <FaPlus /><span>MY LIST</span>
                </div>
            </ButtonBlock>
        </NetflixMainBlock>
    );
};

export default NetflixMain;