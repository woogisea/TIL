import React, { useState, useEffect } from 'react';
import TodoNav from '../components/TodoNav';
import{ useSelector } from 'react-redux';

const TodoNavContainer = () => {
    const {count, todos} = useSelector(({todo}) => (
        {
            todos : todo.todos,
            count : todo.count
        }
    ));
    const [subCount, setSubCount] = useState(count);

    return (
        <TodoNav count = {count}/>
    );
};

export default TodoNavContainer;