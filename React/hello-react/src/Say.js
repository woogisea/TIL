import React,{useState} from 'react';

//함수형 컴포넌트
const Say = () => {
    //useState의 반환값은 배열 형태(현재상태, 상태를 바꾸어 주는 함수)
    const [message, setmessage] = useState(' ');
    const onClickEnter = () => setmessage('안녕하세요!');
    const onClickLeave = () => setmessage('안녕히가세요!');

    const [color, setColor] = useState('black');


    return (
        <>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>
            <h2 style = {{color}}>{message}</h2>

            <button style = {{color : 'red'}} onClick = {() => setColor('red')}>빨간색</button>
            <button style = {{color : 'green'}} onClick = {() => setColor('green')}>초록색</button>
            <button style = {{color : 'blue'}} onClick = {() => setColor('blue')}>파란색</button>
        </>
    );
};

export default Say;