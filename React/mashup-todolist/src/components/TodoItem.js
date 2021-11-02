import React from "react";
import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useTodoDispatch } from "../TodoContext";

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #ced4da;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
const TodoItem = ({ id, text, done }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle} done={done}>
        {done && <AiOutlineCheck />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <FaTrash onClick={onRemove} />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
