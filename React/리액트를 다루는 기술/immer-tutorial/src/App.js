import React, {useState, useCallback, useRef} from 'react';
import produce from 'immer';

//immer 사용해서 불변성 유지
const App = () => {
  const [form, setform] = useState({
    name : ' ',
    username : ' '
  });

  const [data, setdata] = useState({
    array : [],
    uselessValue : null
  });

  const onChange = useCallback(
    e => {
      const {name, value} = e.target;

      setform(
        produce(form, draft => {
          draft[name] = value;
        })
      )
    },
    [form],
  );

  const nextId = useRef(1);
  const onSubmit = useCallback(
    e => {
      const info = {
        id : nextId.current,
        name : form.name,
        username : form.username
      };

      setdata(
        produce(data, draft => {
          draft.array.push(info);
        })
      )

      setform({
        name : ' ',
        username : ' ',
      });
      nextId.current += 1; 
      e.preventDefault();
    },
    [data, form.name, form.username],
  )

  const onRemove = useCallback(
    id => {
      setdata(
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      )
    },
    [data],
  )

  return (
    <div>
      <form onSubmit = {onSubmit}>
        <input type="text" name = "name" value = {form.name} placeholder="아이디" onChange = {onChange}/>
        <input type="text" name = "username" value = {form.username} placeholder="이름" onChange = {onChange}/>
        <button type="submit">등록</button>
      </form>
      <ul>
        {data.array.map(info => (
          <li key = {info.id} onClick = {() => onRemove(info.id)}>{info.username} ({info.name})</li>
        ))}
      </ul>
    </div>
  );
};

export default App;