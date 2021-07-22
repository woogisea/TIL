import React, {useState} from 'react';
import TodoItem from './TodoItem';

const Todos = ( {todos, onInsert, onToggle, onDelete}) => {
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    };
    return (
        <div>
            <input type="text" value  = {value} onChange = {onChange}/>
            <button onClick = {onInsert( {value} )}>등록</button>

            {todos.map(todo => (
                <TodoItem todo = {todo} key = {todo.id} onDelete = {onDelete} onToggle = {onToggle} />
            ))}
        </div>
    );
};

export default Todos;