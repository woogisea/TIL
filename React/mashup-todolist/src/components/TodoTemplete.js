import React from "react";
import styled from "styled-components";

const TodoTempleteBlock = styled.div`
  width: 512px;
  height: 768px;
  background-color: white;
  margin: 0 auto;
  margin-top: 96px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
function TodoTemplete({ children }) {
  return <TodoTempleteBlock>{children}</TodoTempleteBlock>;
}

export default TodoTemplete;
