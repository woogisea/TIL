import React from 'react';
import TodoNav from '../components/TodoNav';
import{ useSelector } from 'react-redux';

const TodoNavContainer = () => {
    const {count} = useSelector(({todo}) => (
        {
            count : todo.count
        }
    ));

    return (
        <TodoNav count = {count}/>
    );
};

export default TodoNavContainer;