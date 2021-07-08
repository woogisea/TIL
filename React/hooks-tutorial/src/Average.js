import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = number => {
    console.log('평균값 계산 중');
    if(number.length === 0) return 0;
    //reduce ==  누적값에 대한 계산
    const sum = number.reduce((a,b) => a+b);
    return sum / number.length;
};

const Average = () => {
    const [list, setlist] = useState([]);
    const [number, setnumber] = useState('');
    //ref를 useRef 이용해서 쉽게 사용
    const inputEl = useRef(null);

    //useCallback를 사용함으로써 렌더링 성능을 최적화 시킬 수 있다.
    //두번째 인자가 비어 있는 배열이면 함수를 계속 재사용
    const onChange = useCallback(e => {
        setnumber(e.target.value);
    },[]);

    //불변성 유지
    //두번째 인자가 값이 들어있는 배열이면 값이 변화할때만 새롭게 함수를 사용.
    const onClick = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setlist(nextList);
        setnumber('');

        inputEl.current.focus();
    },[number,list]);

    //useMemo를 사용해서 특정한 값이 바뀌었을 때만 연산을 실행, 불필요하게 렌더링 시간을 계산할 필요가 없다. 괄호 안에는 값이 변화할 때 연산을 실행하는 값이다.
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input type="text" value = {number} onChange = {onChange} ref = {inputEl}/>
            <button onClick = {onClick}>등록</button>
            <ul>
                {
                    list.map((value,index) => (<li key = {index}>{value}</li>))
                }
            </ul>
            <b>평균값 : </b> {avg}
        </div>
    );
};

export default Average;