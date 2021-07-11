import React, {useState, useCallback} from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({onInsert}) => {
    const [value, setvalue] = useState('');

    const onChange = useCallback(e => {
        setvalue(e.target.value);
    },[]);
    
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setvalue('');

            //onSubmit으로 인한 새로고침을 방지
            e.preventDefault();
        },[value, onInsert],
    );

    return (
        <form className = "TodoInsert" onSubmit={onSubmit}>
            <input type="text" value = {value} placeholder = "할 일을 입력하세요" onChange = {onChange}/>
            <button type = "submit"><MdAdd /></button>
        </form>
    );
};

export default TodoInsert;