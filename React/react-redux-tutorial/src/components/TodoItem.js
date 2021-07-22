import React from 'react';

const TodoItem = ( {todo, onDelete, onToggle}) => {

    const {text, id, checked} = todo;
    return (
        <div>
            <input type="checkbox" onClick = {onToggle(checked)}/>
            <span>{text}</span>
            <button onClick = {onDelete(id)}>삭제</button>
        </div>
    );
};

export default TodoItem;