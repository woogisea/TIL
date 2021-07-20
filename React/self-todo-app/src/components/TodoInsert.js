import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatchContext, useTodoNextIdContext } from '../contexts/Item';

const TodoInsertBox = styled.div`
    display: flex;

    input {
        flex : 1;
        margin-left: 5px;
        border-radius: 10px;
        border: #50586C;
    }

    button {
        font-size: 1.5rem;
        color: #1E4174;
        background-color: #DCE2F0;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }
`;

const TodoInsert = () => {
    const dispatch = useTodoDispatchContext();
    const nextId = useTodoNextIdContext();

    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    }

    const onInsert = () => dispatch({
        type : 'onInsert',
        user : {
            id : nextId.current,
            text : value,
            checked : false
        }
    });

    return (
        <TodoInsertBox>
            <input type="text" value = {value} placeholder = "할 일을 입력하세요" onChange = {onChange}/>
            <button onClick = {onInsert}> <MdAdd /></button>
        </TodoInsertBox>
    );
};

export default TodoInsert;