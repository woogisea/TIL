import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  background-color: ${palette.gray[8]};
  &:hover {
    background-color: ${palette.gray[6]};
  }
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  padding: 0.25rem 1rem;
  font-weight: bold;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.cyan &&
    css`
      background-color: ${palette.cyan[5]};
      &:hover {
        background-color: ${palette.cyan[4]};
      }
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      font-size: 1.125rem;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
