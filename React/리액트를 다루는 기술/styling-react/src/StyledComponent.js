import React from 'react';
import styled, { css } from 'styled-components';

//styled-component의 경우 .css, .scss등의 별도의 스타일 파일을 만들지 않아도 된다.
const StyledComponent = () => {
    //style.태그명의 형태로 해당 스타일이 적용되서 나타난다.
    //props를 통해서 값을 직접 전달해 줄 수 있다.
    const Box = styled.div`
        background: ${props => props.color || 'blue'};
        padding: 1rem;
        display: flex;
    `;

    const Button = styled.button`
        background: white;
        color: black;
        border-radius: 4px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        font-size: 1rem;
        font-weight: 600;

        //조건부의 형태로 스타일링
        ${props => props.inverted && css`
            
            background: none;
            border: 2px solid white;
            color : white;
            &:hover {
                background: white;
                color: black;
            }
        `};

        & + button {
            margin-left : 1rem;
        }
    `;
    return (
        <Box color = "black">
            <Button>안녕하세요</Button>
            <Button inverted = {true}>테두리만</Button>
        </Box>
    );
};

export default StyledComponent;