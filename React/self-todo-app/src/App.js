import React, { useState, useRef } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { TodoProvider } from './contexts/Item';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '안녕하세요',
      checked : true
    },
    {
      id : 2,
      text : '안녕하세요2',
      checked : false
    }
  ]);

  const nextId = useRef(3);

  const onInsert = value => {
    const nextTodo = {
      id : nextId.current,
      text : value,
      checked : false
    };

    setTodos(todos.concat(nextTodo));
    nextId.current += 1;
  }

  const onToggle = id => {
    setTodos(
      todos.map(todo => todo.id === id ? {...todo, checked : !todo.checked} : todo)
    );
  };

  const onRemove = id => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  };
  
  return (
    <div>
      <TodoProvider>
        <TodoTemplate>
          <TodoHeader />
          <TodoInsert onInsert = {onInsert}/>
          <TodoList todos = {todos} onToggle = {onToggle} onRemove = {onRemove}/>
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
};

export default App;