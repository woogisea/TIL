import React, { ChangeEvent, FormEvent, useState } from 'react';


type TodoInsertProps = {
    onInsert : (text : string) => void;
};
function TodoInsert({onInsert} : TodoInsertProps) {

    const [value, setValue] = useState('');

    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input type="text" value = {value} onChange = {onChange}/>
                <button type = "submit">입력</button>
            </form>
        </div>
    );
};

export default TodoInsert;