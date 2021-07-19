import React from 'react';
import styled from 'styled-components';

const TodoTemplateBox = styled.div`
    background-color: #DCE2F0;
    width: 500px;
    height: 600px;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 10px;
`;

const TodoTemplate = ({ children }) => {

    return (
        <TodoTemplateBox>
            {children}
        </TodoTemplateBox>
    );
};

export default TodoTemplate;