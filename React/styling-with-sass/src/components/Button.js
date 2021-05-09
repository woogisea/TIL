import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//...rest  = 지정한 props를 제외한 값들을 rest 객체에 모아준다.(onClick, onMouseMove 등등 하나하나 선언하지 않아도 사용가능하다.)
function Button({children, size, color, outline,fullWidth, ...rest}){
    return <buttton className = {classNames('Button',size,color, {outline,fullWidth})} {...rest}>{children}</buttton>      //조건부로 CSS클래스 삽입, outline의 값을 props로 받아와서 객체 안에 바로 집어 넣은 경우 true일때만 적용
}

Button.defaultProps = {
    size : 'medium',
    color : 'blue'
};

export default Button;