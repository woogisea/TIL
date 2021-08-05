import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

//공통된 버튼 스타일
//다양한 곳에서 스타일을 유지하면서 재사용이 가능하다.
const buttonStyle = css`
    background-color: ${palette.gray[8]};
    &:hover {
        background-color: ${palette.gray[6]};
    }

    border: none;
    outline: none;
    color: white;
    font-size: 1rem;
    padding: 0.25rem 1rem;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;   

    //조건부 스타일링
    ${props =>
        props.fullWidth && 
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
    `}

    ${props => 
        props.cyan &&
        css`
            background-color: ${palette.cyan[5]};
            &:hover {
                background-color: ${palette.cyan[4]};
            }
    `}
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan = {props.cyan ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    )
}

export default Button;