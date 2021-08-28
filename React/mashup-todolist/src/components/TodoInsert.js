import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInsertBlock = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 1000;
    background-color: white;
    width: 500px;
    padding: 2rem;
    border-radius: 10px;
    box-shadow : 2px 2px 2px 2px gray;
    display: flex;

    button {
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        margin-left: 1rem;
        border-radius: 10px;
    }
`;

const StyledInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    font-size: 1.5rem;
    
`;
const TodoInsert = ({value, onChange, onSubmit}) => {
    return (
        <TodoInsertBlock>
            <StyledInput placeholder = "입력" value = {value} onChange = {onChange} />
            <button onClick = {() => onSubmit(value)}>입력</button>
        </TodoInsertBlock>

    );
};

export default TodoInsert;