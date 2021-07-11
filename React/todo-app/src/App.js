import React, { useState, useCallback, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, settodos] = useState([
    {
      id : 1,
      text : '리액트의 기초',
      checked : true
    },
    {
      id : 2,
      text : '컴포넌트 스타일링해 보기',
      checked : true
    },
    {
      id : 3,
      text : '일정 관리 앱 만들어 보기',
      checked : false
    },
  ])

  //useRef로 로컬변수 사용하기 
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
        const todo = {
          id : nextId.current,
          text,
          checked : false
        };
        settodos(todos.concat(todo));
        nextId.current += 1;
    },
    [todos], 
  ); 

  const onRemove = useCallback(
    id => {
      settodos(todos.filter(todo=> (todo.id !== id)));
    },
    [todos],
  )

  const onToggle = useCallback(
    //불변성을 유지하면서 특정 원소의 값만 바꾸기 map의 활용
    id => {
      settodos(todos.map(todo => todo.id === id ? {...todo, checked : !todo.checked} : todo));
    },
    [todos],
  )
  
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert = {onInsert}/>
        <TodoList todos = {todos} onRemove = {onRemove} onToggle = {onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;