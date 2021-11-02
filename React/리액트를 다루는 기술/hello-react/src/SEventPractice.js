import React, {useState} from 'react';

const SEventPractice = () => {
    
    //input값이 2개여서 함수 2개로 처리할 수 있지만 input값이 늘어나면 처치 곤란
    // const [username, setusername] = useState(' ');
    // const [message, setmessage] = useState(' ');

    // const handleChangeUser = e => {
    //     setusername(e.target.value);
    // }

    // const handleChangeMess = (e) => {
    //     setmessage(e.target.value);
    // }

    const [form, setform] = useState({
        username : ' ',
        message :  ' '
    })

    //문자열이 아닌 객체 넣기
    const {username, message} = form;
    const handleChange = e => {
        const nextform = {
            ...form,   //기존의 form 값을 복사
            [e.target.name] : e.target.value //원하는 값 붙여넣기
        };
        setform(nextform);
    }

    const handleClick = () => {
        alert(username + " : " + message);
        // setmessage(' ');
        // setusername(' ');
        setform({
            username : ' ',
            message : ' '
        });
    };

    const onKeyPress = e => {
        if(e.key === 'Enter') {
            handleClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type = "text" name = "username" value = {username} onChange = {handleChange}></input>
            <input type = "text" name = "message" value = {message} onChange = {handleChange} onKeyPress = {onKeyPress}></input>
            {/*버튼 클릭 시 메세지 띄우고 공백으로 바꿈, this.state로 현재, setState로 바꿈*/}
            <button onClick = {handleClick}>확인</button>
    </div>
    );
};

export default SEventPractice;