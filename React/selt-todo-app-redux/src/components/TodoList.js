import React from 'react';
import '../scss/TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
    return (
        <div className="TodoList">
            {todos && todos.map(todo => (
                <TodoListItem todos = {todo} key = {todo.id} onToggle = {onToggle} onDelete = {onDelete} />
            ))}
        </div>
    );
};

export default TodoList;