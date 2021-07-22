import React from 'react';
import {MdCheckBoxOutlineBlank, MdDeleteForever,MdCheckBox} from 'react-icons/md';
import '../scss/TodoListItem.scss'

const TodoListItem = ({ todos, onToggle, onDelete }) => {

    const {checked, text, id } = todos;
    console.log(checked);
    return (
        <div className="TodoListItem">
            <div className="insert">
                {checked ? <MdCheckBox onToggle = {onToggle(id)}/> : <MdCheckBoxOutlineBlank onToggle = {onToggle(id)}/>}
                <span>{text}</span>
            </div>
            <div className="delete">
                <MdDeleteForever onDelete = {onDelete(id)}/>
            </div>
        </div>
    );
};

export default TodoListItem;