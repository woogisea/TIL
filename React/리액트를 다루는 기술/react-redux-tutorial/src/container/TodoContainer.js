import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { changeInput, insert, Tdelete, toggle } from '../module/todo';

const TodoContainer = ( {input, changeInput,todos, insert, toggle, Tdelete}) => {
    return (
        <Todos input = {input} onchangeInput = {changeInput} todos = {todos} onInsert = {insert} onToggle = {toggle} onDelete = {Tdelete} />
    );
};



export default connect(
    state => (
        {
            input : state.todo.input,
            todos : state.todo.todos
        }
    ),

    {
        changeInput,
        insert,
        Tdelete,
        toggle
    }
)(TodoContainer);