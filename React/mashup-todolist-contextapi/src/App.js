import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplete from './components/TodoTemplete';
import { TodoProvider } from './contexts/Todo';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;
function App() {
  return (
    <div>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplete>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplete>
      </TodoProvider>
    </div>
  );
}

export default App;
