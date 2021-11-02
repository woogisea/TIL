import React from 'react';
import PropTypes from 'prop-types';

//함수형 컴포넌트 선언
//부모 컴포넌트에서 props값 가져오기 
//함수의 파라미터 부분에서 비구조화 할당 사용 
const Mycomponent = ({name, children}) => {
    //props를 계속 붙이는 것이 아닌 비구조화 할당을 통해서 편하게 
    // const {name, children} = props;
    return (
        <>
            <div>component {name}</div>
            <div>{children}</div>
        </>
    )
};

//props 값을 따로 지정하지 않았을 떄 보여 줄 기본값
Mycomponent.defaultProps = {
    name : '기본 이름'
}

//props의 기본 타입 지정
Mycomponent.propTypes = {
    name : PropTypes.string
}
export default Mycomponent;

