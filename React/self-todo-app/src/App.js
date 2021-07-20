import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { TodoProvider } from './contexts/Item';

const App = () => {
  
  return (
    <div>
      <TodoProvider>
        <TodoTemplate>
          <TodoHeader />
          <TodoInsert />
          <TodoList />
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
};

export default App;