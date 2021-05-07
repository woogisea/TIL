import React, {useState, useRef} from 'react';

function InputSample() {
    const [text, setText] = useState(' ');
    const [inputs, setInputs] = useState( {          //여러개의 input 관리를 위해 객체 사용
        name : ' ',
        nickname : ' '
    });
    const nameInput = useRef();       //Ref 객체 생성
    
    const {name, nickname} = inputs;


    //input 상태를 한개만 관리 할 때
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText(' ');
    }

    //input 상태를 여러개 관리 할 때
    const onChange1 = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset1 = () => {
        setInputs( {
            name : ' ',
            nickname : ' '
        })
        nameInput.current.focus();     //current => 현재 지정된 DOM
    }

    return (
        <div>
            <input onChange = {onChange} value = {text}/>                                                   {/*input 상태를 관리 할때에는 value 값도 설정하는 것이 중요하다 */}
            <input name = "name" onChange = {onChange1} value = {name} ref = {nameInput} placeholder = "이름" />      {/*내가 원하는 부분에 ref값 설정  reset버튼을 클릭 후 focus가 name input으로 설정된다*/}
            <input name = "nickname" onChange = {onChange1} value = {nickname}  placeholder = "닉네임" />
            <button onClick = {onReset}>초기화</button>
            <button onClick = {onReset1}>초기화1</button>
            <div>
                <b>값 : {text} </b>   <br />
                <b>이름 : {name} </b>  <br />
                <b>닉네임 : {nickname}</b> 
            </div>
        </div>
    );
}

export default InputSample;