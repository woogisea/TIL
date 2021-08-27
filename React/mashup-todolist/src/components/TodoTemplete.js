import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { DateString, DayName } from '../lib/Date';
import { AiOutlinePlus } from 'react-icons/ai';
import TodoInsert from './TodoInsert';
import { AiOutlineClose } from 'react-icons/ai';

const TodoTempleteBlock = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => 
        props.blur && 
        css`
            filter: blur(10px);
    `}
`;

const WhiteBlock = styled.div`
    width: 460px;
    height: 600px;
    background-color: white;
    border-radius: 10px;
    position: relative;

    h2 {
        font-size: 2rem;
        margin-bottom: 0.8rem;
    }

    span {
        font-size: 1.2rem;
        color: gray;
        font-weight: bold;
    }

    .header {
        padding: 2rem;
    }
`;
const Footer = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: #00b894;
    left: 50%;
    top : 95%;
    transform: translate(-50%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        font-size: 2rem;
        color: white;
        font-weight: bold;
    }

    ${props =>
        props.close &&
        css`
            background-color: red;
    `}
`;
const TodoTemplete = ({children}) => {
    const [isToggle, setisToggle] = useState(false);
    const [blur, setBlur] = useState(false)
    const onToggle = () => {
        setisToggle(!isToggle)
        setBlur(!blur)
    };
    console.log(isToggle);
    console.log(blur);

    return (
        <>
            {isToggle && (
                <TodoInsert />
            )}
            <TodoTempleteBlock >
                <WhiteBlock>
                    <div className="header">
                        <h2>{DateString}</h2>
                        <span>{DayName}</span>
                    </div>
                    {children}
                    {isToggle ? (
                        <Footer close>
                            <AiOutlineClose onClick = {onToggle} />
                        </Footer>
                    ) : (
                        <Footer>
                            <AiOutlinePlus onClick = {onToggle} />
                        </Footer>
                    )}
                </WhiteBlock>
            </TodoTempleteBlock>
        </>
    );
};

export default TodoTemplete;