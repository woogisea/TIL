import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemListBlock = styled.div`
    padding: 2rem;
`;

const ItemList = ({todos, onToggle}) => {
    return (
        <ItemListBlock>
            {todos.map(todo => (
                <Item todo = {todo} key = {todo.id} onToggle = {onToggle}/>
            ))}
        </ItemListBlock>
    );
};

export default ItemList;