import React, { useState, useContext, useRef } from "react";
import { UserDispatch } from "./App";

function CreateUser() {
  const [useInputs, setUseInputs] = useState({
    username: "",
    email: "",
  });
  const dispatch = useContext(UserDispatch);

  const nextId = useRef(3);

  const { username, email } = useInputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setUseInputs({
      ...useInputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        active: false,
      },
    });
    nextId.current += 1;

    setUseInputs({
      username: "",
      email: "",
    });
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="계정명"
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="이메일"
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
