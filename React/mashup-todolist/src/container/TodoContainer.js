import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import{ useSelector, useDispatch } from 'react-redux';
import { todoRemove, todoToggle } from '../modules/todo';
import TodoNav from '../components/TodoNav';

const TodoContainer = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector(({todo}) => (
        {
            todos : todo.todos
        }
    ));

    const onToggle = id => {
        dispatch(todoToggle(id))
    }

    const onDelete = id => {
        dispatch(todoRemove(id))
    };

    const undoTask = todos.filter(todo => !todo.done);
    console.log(undoTask);

    return (
        <>
            <TodoNav count = {undoTask.length} />
            <ItemList todos = {todos} onToggle = {onToggle} onDelete = {onDelete}/>
        </>
    );
};

export default TodoContainer;