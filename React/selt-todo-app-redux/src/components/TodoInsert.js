import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';
import '../scss/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    }
    return (
        <div className="TodoInsert">
            <input type="text" value = {value} placeholder = "할 일을 입력하세요" onChange = {onChange}/>
            <button onClick = {onInsert(value)}><MdAdd /></button>
        </div>
    );
};

export default TodoInsert;