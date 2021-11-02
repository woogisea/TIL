import React from 'react';
import TodoItem from './TodoItem';

const Todos = ( {input, todos, onchangeInput, onInsert, onToggle, onDelete}) => {

    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onchangeInput('');
    };

    const onChange = e => {
        onchangeInput(e.target.value)
    };

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input type = "text" value = {input} onChange = {onChange} />
                <button type = "submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem todo = {todo} key = {todo.id} onDelete = {onDelete} onToggle = {onToggle} />
                ))}
            </div>
        </div>
    );
};

export default Todos;