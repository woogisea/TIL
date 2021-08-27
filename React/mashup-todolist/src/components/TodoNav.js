import React from 'react';
import styled from 'styled-components';

const TodoNavBlock = styled.div`
    border-bottom: 1px solid lightgray;
    padding-bottom: 1rem;
    width: 100%;
    padding-left: 2rem;

    p {
        color: #00b894;
        margin: 0;
        font-size: 1.125rem;
    }
`;
const TodoNav = ({count}) => {
    return (
        <TodoNavBlock>
            <p>할 일 {count}개 남음</p>
        </TodoNavBlock>
    );
};

export default TodoNav;