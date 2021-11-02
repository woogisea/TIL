import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 40vw;
  height: 80vh;
  background-color: white;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin-top: 96px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
function TodoTemplete({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplete;
