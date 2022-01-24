import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const TrashBlock = styled.div`
  color: #868e96;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  &:hover {
    color: red;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  & + & {
    margin-top: 20px;
  }

  &:hover {
    ${TrashBlock} {
      display: initial;
    }
  }
`;

const CheckBox = styled.div`
  margin-right: 20px;
  border: 1px solid #868e96;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  ${(props) =>
    props.done &&
    css`
      color: #20c997;
      border: 1px solid #20c997;
    `}
`;

const Text = styled.div`
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: #868e96;
    `}
`;
function TodoItem({ text, checked }) {
  return (
    <TodoItemBlock>
      <CheckBox done={checked}>{checked && <MdDone />}</CheckBox>
      <Text done={checked}>{text}</Text>
      <TrashBlock>
        <MdDelete />
      </TrashBlock>
    </TodoItemBlock>
  );
}

export default TodoItem;
