import React,{useState} from 'react';

//useState를 한번만 사용하기
const Counter = () => {
    //useState의 파라미터에는 상태의 기본값
    const [number, setnumber] = useState(0);

    return (
        <div>
            <h2>현재 카운터 값은 {number}입니다.</h2>
            <button onClick = {() => {setnumber(number + 1)}}>+1</button>
            <button onClick = {() => {setnumber(number - 1)}}>-1</button>
        </div>
    );
};

export default Counter;