import React, { useContext } from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoProvider";

const TodoHeadBlock = styled.div`
  border-bottom: 1px solid lightgray;
  padding-left: 50px;
  padding-bottom: 20px;
  h1 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0;
    color: #868e96;
  }
  span {
    color: #20c997;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const doneArr = todos.filter((todo) => !todo.done);
  return (
    <TodoHeadBlock>
      <h1>2021년 1월 24일</h1>
      <p>월요일</p>
      <span>할 일 {doneArr.length}개 남음</span>
    </TodoHeadBlock>
  );
}

export default TodoHead;
