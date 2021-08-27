import React from 'react';
import ItemList from '../components/ItemList';
import{ useSelector, useDispatch } from 'react-redux';
import { todoToggle } from '../modules/todo';

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
    return (
        <ItemList todos = {todos} onToggle = {onToggle}/>
    );
};

export default TodoContainer;