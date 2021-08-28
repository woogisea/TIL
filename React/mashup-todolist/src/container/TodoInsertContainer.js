import React, { useState } from 'react';
import TodoInsert from '../components/TodoInsert';
import { useDispatch} from 'react-redux';
import { todoInsert } from '../modules/todo';

const TodoInsertContainer = () => {
    const [value, setValue] = useState('');
    const onChange = e => {
        setValue(e.target.value)
    };

    const dispatch = useDispatch();
    const onSubmit = text => {
        dispatch(todoInsert(text))
        setValue('')
    };

    return (
        <TodoInsert onSubmit = {onSubmit} value = {value} onChange = {onChange} />
    );
};

export default TodoInsertContainer;