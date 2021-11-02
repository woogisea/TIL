import React from 'react';

const TodoItem = ( {todo, onDelete, onToggle}) => {

    return (
        <div>
            <input type="checkbox" onClick = {() => onToggle(todo.id)}/>
            <span style = { {textDecoration : todo.checked ? 'line-through' : 'none'}}>{todo.text}</span>
            <button onClick = {() => onDelete(todo.id)}>삭제</button>
        </div>
    );
};

export default TodoItem;