import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background-color: ${palette.cyan[5]};

      &:hover {
        background-color: ${palette.cyan[4]};
      }
    `}
`;
function Button(props) {
  return <StyledButton {...props}></StyledButton>;
}

export default Button;
