import React, { useState, useRef } from "react";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "jaewook",
      email: "aaa@aaa.com",
      active: true,
    },
    {
      id: 2,
      username: "hello",
      email: "bbb@bbb.com",
      active: false,
    },
  ]);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };
    setUsers([...users, user]);

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <Counter />
      <InputSample />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}

export default App;
