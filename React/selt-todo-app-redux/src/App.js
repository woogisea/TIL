import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoTemplete from './components/TodoTemplete';
import TodoContainer from './container/TodoContainer';

const App = () => {
  return (
    <TodoTemplete>
      <TodoHeader />
      <TodoContainer />
    </TodoTemplete>
  );
};

export default App;