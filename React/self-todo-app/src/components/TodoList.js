import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';


const TodoListBox = styled.div`
    width: 100%;
    height: 100%;
`;

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
       <TodoListBox>
           {todos.map (todo => (
               <TodoListItem todo = {todo} onToggle = {onToggle} onRemove = {onRemove} key = {todo.id}>{todo.text}</TodoListItem>
           ))}
       </TodoListBox>
    );
};

export default TodoList;