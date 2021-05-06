import React from 'react';

function Hello({name, color}) {
    return (
        //비구조화 할당 문법 사용 (props.를 생략할 수 있다.)
         <div style ={{color}}>안녕하세요 {name}</div>         
    );
}

//props를 사용하지 않고 기본값 설정
Hello.defaultProps = {
    name : '이름없음'
}
export default Hello;