import React from 'react';
import TodoList from '../components/TodoList';
import TodoInsert from '../components/TodoInsert';
import { connect } from 'react-redux';
import { insert,toggle, deleteS } from '../module/todo';

const TodoContainer = ( {todos, insert, toggle, deleteS}) => {
    return (
        <>
            <TodoInsert onInsert = {insert} />
            <TodoList todos = {todos} onToggle = {toggle} onDelete = {deleteS} />
        </>
    );
};

export default connect(
    ({todos}) => ({
        todos : todos.todos
    }),
    {
        insert,
        toggle,
        deleteS
    }
)(TodoContainer);