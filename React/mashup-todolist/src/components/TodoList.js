import React from 'react';
import styled from 'styled-components';

const TodoListBlock = styled.div`
    /*flex : 1로 인해서 자신이 차지할 수 있는 나머지 공간을 차지한다*/
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;
`;
function TodoList() 
{
    return (
        <TodoListBlock>TodoList</TodoListBlock>
    );
}
export default TodoList;