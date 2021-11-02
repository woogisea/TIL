import React from 'react';
import styled from 'styled-components';
import{ MdRadioButtonUnchecked } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const ItemBlock = styled.div`
    list-style: none;
    .list {
        display: flex;
        justify-content: center;
        align-items: center;

        .sublist {
            flex : 1;
            display: flex;
            align-items: center;

            svg {
                margin-right: 1rem;
                font-size: 1.5rem;
                color: gray;
            }

            li {
                font-size: 1.5rem;
                color: gray;
            }
        }
    }

    #subicons {
        visibility: hidden;
        font-size: 1.5rem;
        cursor: pointer;
    }

    &+&{
        margin-top: 1.5rem;
    }

    &:hover {
        #subicons {
            visibility: visible;

            &:hover {
                color : red;
            }
        }
    }
`;
const Item = ({todo, onToggle, onDelete}) => {
    return (
        <ItemBlock>
            <div className="list">
                <div className="sublist">
                    {todo.done ? (
                        <>
                            <AiOutlineCheckCircle onClick = {() => onToggle(todo.id)}/>
                            <li style = {{textDecoration : todo.done ? 'line-through' : 'none'}}>{todo.text}</li>
                        </>
                    ): (
                        <>
                            <MdRadioButtonUnchecked onClick = {() => onToggle(todo.id)}/>
                            <li style = {{textDecoration : todo.done ? 'line-through' : 'none'}}>{todo.text}</li>
                        </>
                    )}
                </div>
                <BiTrash id = "subicons" onClick = {() => onDelete(todo.id)} />   
            </div>       
        </ItemBlock>
    );
};

export default Item;