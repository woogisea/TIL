import React, {useState} from 'react';

const IterationSample = () => {
    //객체의 형태로 이루어진 배열
    const [names, setnames] = useState(
        [
            {id : 1, text : '눈사람'},
            {id : 2, text : '얼음'},
            {id : 3, text : '눈'},
            {id : 4, text : '바람'},
        ]
    );
    const [inputText, setinputText] = useState('');
    const [nextid, setnextid] = useState(5);

    const onChange = e => {
        setinputText(e.target.value);   
    }

    const onClick = () => {
        //names라는 배열에 concat 이용해서 붙이기
        //불변성 유지를 위해서 concat 사용
        const newList = names.concat({
            id : nextid,
            text : inputText
        })
        setnextid(nextid + 1);
        setnames(newList);
        setinputText(' ');
    }

    //id값을 받아서 지우기,filter 사용 동일하게 불변성 유지를 위해서 
    const onRemove = id => {
        const removeList = names.filter(name => name.id !== id);
        setnames(removeList);

    }
    //map 사용하기, nameList에 JSX로 작성된 새로운 배열을 담는다.
    //key값을 통해 변화를 빠르게 알 수 있다. 고유한 key값이 없을 경우에는 index를 활용할 수 있다.
    const nameList = names.map(name => <li key = {name.id} onDoubleClick = {() => onRemove(name.id)}>{name.text}</li>);
    return (
        <>
            <input type="text" value = {inputText} onChange = {onChange}/>
            <button onClick = {onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;