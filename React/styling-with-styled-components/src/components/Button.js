import React from 'react';
import styled, {css} from 'styled-components';
import {darken,lighten} from 'polished';

//비구조화 할당 문법을 사용하여 theme.pallete 조회
const colorStyles = css`
  ${({theme, color}) => {
      const selected = theme.palette[color];
      return css`
       background : ${selected};
        &:hover {
            background: ${lighten(0.1, selected)};
          }
        &:active {
          background: ${darken(0.1,selected)};
        }
        ${props => props.outline && css` color : ${selected}; background : none; border : 1px solid ${selected};  &:hover { background : ${selected}; color : white;}`}
      `;
  }}
  `;

  //크기 설정 
  // const sizeStyles = css`
  //    ${props => props.size === 'large' && css` height : 3rem; font-size : 1.25rem;`}
  //    ${props => props.size === 'small' && css` height : 1.75rem; font-size : 0.875rem;`}
  // `;

  //크기 코드 리팩토링(코드 중복 방지)
  const sizes = {
    large : {
      height : '3rem',
      fontSize : '1.25rem'
    },

    medium : {
      height : '2.25rem',
      fontSize : '1rem'
    },

    small : {
      height : '1.75rem',
      fontSize : '0.875rem'
    }
  };

  const sizeStyles = css`
    ${({size}) => css` 
      height : ${sizes[size].height};
      font-size : ${sizes[size].fontSize};
    `}
  `;

  const fullWidthStyles = css`
    ${props => props.fullWidth && css` width : 100%; justify-content : center; & + & {margin-left : 0; margin-top : 1rem;}`}
    `;


const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  ${sizeStyles}
  
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
  
  ${fullWidthStyles}

`;

function Button({ children, color, size, outline,fullWidth, ...rest }) {
  return <StyledButton color = {color} size = {size} outline = {outline} fullWidth = {fullWidth} {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  color : 'blue',
  size : 'medium'
};

export default Button;