import React from 'react';
import TodoTemplete from './components/TodoTemplete';
import TodoContainer from './container/TodoContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #dfe6e9;
  }

   html {
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  } 
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
        <TodoTemplete>
          <TodoContainer />
        </TodoTemplete>
    </div>
  );
};

export default App;