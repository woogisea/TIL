import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

type TodoItemProps = {
    todos : Todo[];
    onToggle : (id : number) => void;
    onDelete : (id : number) => void;
}
const TodoList = ({ todos, onToggle, onDelete} : TodoItemProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo => 
                    <TodoItem key = {todo.id} todo = {todo} onToggle = {onToggle} onDelete = {onDelete} />
                )}
            </ul>
        </div>
    );
};

export default TodoList;