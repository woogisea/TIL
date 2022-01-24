import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplete from "./components/TodoTemplete";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplete>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplete>
    </>
  );
}

export default App;
