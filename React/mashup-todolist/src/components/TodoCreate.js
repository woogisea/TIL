import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoId } from "../TodoProvider";

const CircleButton = styled.button`
  background-color: #38d9a9;
  &:hover {
    background-color: #63e6be;
  }
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  ${(props) =>
    props.open &&
    css`
      transform: translate(-50%, 50%) rotate(45deg);

      background-color: #ff6b6b;
      &:hover {
        background-color: #ff8787;
      }
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;
const InsertForm = styled.form`
  background-color: #fbf9fa;
  padding: 4rem;
`;
const InputStyle = styled.input`
  border: 1px solid #dee2e6;
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
`;
function TodoCreate() {
  const dispatch = useTodoDispatch();
  const nextId = useTodoId();
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
    const todo = {
      id: nextId.current,
      text: value,
      done: false,
    };

    dispatch({ type: "CREATE", todo });

    setValue("");
    nextId.current += 1;
  };
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <InputStyle
              type="text"
              value={value}
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              onChange={onChange}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
