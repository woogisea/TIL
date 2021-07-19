import React from 'react';
import styled from 'styled-components';
const TodoHeaderBox = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        color: white;
        font-size: 2rem;
    }
`;

const TodoHeader = () => {
    return (
        <TodoHeaderBox>
            <h2>Todo List</h2>
        </TodoHeaderBox>
    );
};

export default TodoHeader;