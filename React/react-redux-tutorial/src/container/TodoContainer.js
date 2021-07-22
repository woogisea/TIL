import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { insert, Tdelete, toggle } from '../module/todo';

const TodoContainer = ( {todos, insert, toggle, Tdelete}) => {
    return (
        <Todos todos = {todos} onInsert = {insert} onToggle = {toggle} onDelete = {Tdelete} />
    );
};

const mapStateToProps = todos => ({
    todos : todos.todos,
});

const mapDispatchToProps = dispatch => ({
    insert : () => dispatch(insert()),
    toggle : () => dispatch(toggle()),
    Tdelete : () => dispatch(Tdelete())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);