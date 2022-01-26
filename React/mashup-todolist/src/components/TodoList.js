import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoProvider";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  height: 100%;
  padding: 1.5rem;
`;
function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          checked={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
