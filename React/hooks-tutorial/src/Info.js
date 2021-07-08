import React, {useState,  useEffect} from 'react';

//useState 여러번 사용하기 
const Info = () => {
    const [name, setname] = useState('');
    const [nickname, setnickname] = useState('');

    //마운트 될 때 + 업데이트 
    // useEffect(() => {
    //     console.log('렌더링 완료');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    //마운트 될 때만
    // useEffect(() => {
    //     console.log('마운트 될 때만 실행');
    // }, [])


    //특정 값이 업데이트 될 때만 실행, useEffect의 두번째 파라미터의 값에 원하는 값을 넣어주면 된다.
    // useEffect(() => {
    //     console.log(name);
    // }, [name])

    const onChangeName = e => {
        setname(e.target.value);
    }

    const onChangeNickname = e => {
        setnickname(e.target.value);
    }
    return (
        <div>
            <input type="text" value = {name} onChange = {onChangeName}/>
            <input type="text" value = {nickname} onChange = {onChangeNickname} />
            <h2>이름 : {name}</h2>
            <h2>닉네임 : {nickname}</h2>
        </div>
    );
};

export default Info;