import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import {useTodoStateContext} from '../contexts/Item';


const TodoListBox = styled.div`
    width: 100%;
    height: 100%;
`;

const TodoList = () => {
    const state = useTodoStateContext();
    console.log(state);
    return (
       <TodoListBox>
           {state.map (todo => (
               <TodoListItem key = {todo.id} text = {todo.text} id = {todo.id} checked = {todo.checked}></TodoListItem>
           ))}
       </TodoListBox>
    );
};

export default TodoList;