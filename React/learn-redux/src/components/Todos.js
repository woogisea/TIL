import React, { useState } from "react";

function TodoItem({ todos, onToggle }) {
  <li
    style={{ textDecoration: todos.done ? "line-through" : "none" }}
    onClick={() => onToggle(todos.id)}
  >
    {todos.text}
  </li>;
}

function TodoList({ todos, onToggle }) {
  {
    todos.map((todo) => (
      <TodoItem key={todo.id} todos={todo} onToggle={onToggle} />
    ));
  }
}

function Todos({ todos, onToggle, onCreate }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    onCreate(text);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="할 일을 입력하세요"
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>

      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
