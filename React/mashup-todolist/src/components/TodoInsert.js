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
`;

const StyledInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    font-size: 1.5rem;
    width: 100%;
`;
const TodoInsert = () => {
    const [value, setValue] = useState('');
    const onChange = e => {
        setValue(e.target.value)
    };
    return (
        <TodoInsertBlock>
            <StyledInput placeholder = "입력" value = {value} onChange = {onChange} />
        </TodoInsertBlock>

    );
};

export default TodoInsert;