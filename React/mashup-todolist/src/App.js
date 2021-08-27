import React from 'react';
import TodoNav from './components/TodoNav';
import TodoTemplete from './components/TodoTemplete';
import TodoContainer from './container/TodoContainer';
import TodoNavContainer from './container/TodoNavContainer';

const App = () => {
  return (
    <div>
      <TodoTemplete>
        <TodoNavContainer />
        <TodoContainer />
      </TodoTemplete>
    </div>
  );
};

export default App;