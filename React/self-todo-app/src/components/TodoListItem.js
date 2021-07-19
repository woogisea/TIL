import React from 'react';
import styled, { css } from 'styled-components';
import {MdCheckBoxOutlineBlank, MdDeleteForever,MdCheckBox} from 'react-icons/md';

const TodoListItemBox = styled.div`
    box-sizing: border-box;
    width: 480px;
    height: 50px;
    margin: 10px;
    margin-top: 20px;
    background-color: #DCE2F0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;

    .insert {
        display: flex;
        align-items: center;
        flex : 1;
        font-size: 1.125rem;

        span {
            padding: 1rem;

            ${props => props.checked && css`
                text-decoration: line-through;
            `};
        }
    }
    
    .delete {
        padding: 1rem;

        &:hover {
            svg {
                color: red;
                cursor: pointer;
                font-size : 1.125rem;
            }
        }
    }
`;

const TodoListItem = ({ todo, onToggle, onRemove}) => {
    const {checked, text, id} = todo;
    return (
        <TodoListItemBox checked = {checked}>
            <div className="insert">
                {checked ? <MdCheckBox onClick = {() => onToggle(id)} /> : <MdCheckBoxOutlineBlank onClick = {() => onToggle(id)}/>}
                <span>{text}</span>
            </div>
            <div className="delete">
                <MdDeleteForever onClick = {() => onRemove(id)}/>
            </div>
        </TodoListItemBox>
    );
};

export default TodoListItem;