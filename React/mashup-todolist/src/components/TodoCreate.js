import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
  background-color: #38d9a9;
  &:hover {
    background-color: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 5;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none;

  transition: 0.125s all ease-in;

  ${(props) =>
    props.open &&
    css`
      background-color: #ff6b6b;

      &:hover {
        background-color: #ff8787;
      }

      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormBlock = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const InsertForm = styled.form`
  background-color: #f8f9fa;
  padding: 32px 32px 72px 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
const TodoCreate = () => {
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const onToggle = () => {
    setOpen(!open);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(!open);
    nextId.current += 1;
  };
  return (
    <>
      {open && (
        <InsertFormBlock>
          <InsertForm onSubmit={onSubmit}>
            <Input value={value} onChange={onChange} />
          </InsertForm>
        </InsertFormBlock>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <AiOutlinePlus />
      </CircleButton>
    </>
  );
};

export default TodoCreate;
