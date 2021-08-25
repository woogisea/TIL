import React, { CSSProperties } from 'react';
import { Todo } from '../modules/todos';

type TodoItemProps = {
    todo : Todo;
    onToggle : (id : number) => void;
    onDelete : (id : number) => void;
}
const TodoItem = ({ todo, onToggle, onDelete} : TodoItemProps) => {

    const textStyle : CSSProperties = {
        textDecoration : todo.done ? 'line-through' : 'none'
    };

    const removeStyle : CSSProperties = {
        marginLeft : 8,
        color : 'red'
    };

    const handleToggle = () => {
        onToggle(todo.id)
    };

    const handleRemove = () => {
        onDelete(todo.id)
    };

    return (
        <div>
            <li>
                <span onClick = {handleToggle} style = {textStyle}>{todo.text}</span>
                <span onClick = {handleRemove} style = {removeStyle}>(x)</span>
            </li>
        </div>
    );
};

export default TodoItem;