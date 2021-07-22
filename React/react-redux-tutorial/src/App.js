import React from 'react';
import CounterContainer from './container/CounterContainer';
import TodoContainer from './container/TodoContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
};

export default App;