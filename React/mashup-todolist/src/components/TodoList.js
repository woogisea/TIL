import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  height: 100%;
  padding: 1.5rem;
`;
function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" checked />
      <TodoItem text="컴포넌트 스타일링 하기" checked />
      <TodoItem text="Context 만들기" />
      <TodoItem text="기능 구현하기" />
    </TodoListBlock>
  );
}

export default TodoList;
