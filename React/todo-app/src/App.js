import React, { useState, useCallback, useRef } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

//함수를 통해서 많은 데이터 만들기
const createBulkTodos = () => {
  const array = [];
  for(var i = 1; i<=2500; i++) {
    array.push({
      id : i,
      text : `할 일 ${i}`,
      checked : false
    });
  };

  return array;
};

const App = () => {
  // const [todos, settodos] = useState([
  //   {
  //     id : 1,
  //     text : '리액트의 기초',
  //     checked : true
  //   },
  //   {
  //     id : 2,
  //     text : '컴포넌트 스타일링해 보기',
  //     checked : true
  //   },
  //   {
  //     id : 3,
  //     text : '일정 관리 앱 만들어 보기',
  //     checked : false
  //   },
  // ])

  //useState에 파라미터로 함수형태를 넣어주면 처음 렌더링 될 때만 함수가 실행 된다.
  const [todos, settodos] = useState(createBulkTodos);

  //useRef로 로컬변수 사용하기 
  //함수형 업데이트를 사용해서 렌더링 시간 단축 
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
        const todo = {
          id : nextId.current,
          text,
          checked : false
        };
        settodos(todos => todos.concat(todo));
        nextId.current += 1;
    },
    [], 
  ); 

  const onRemove = useCallback(
    id => {
      settodos(todos => todos.filter(todo=> (todo.id !== id)));
    },
    [],
  )

  const onToggle = useCallback(
    //불변성을 유지하면서 특정 원소의 값만 바꾸기 map의 활용
    id => {
      settodos(todos => todos.map(todo => todo.id === id ? {...todo, checked : !todo.checked} : todo));
    },
    [],
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