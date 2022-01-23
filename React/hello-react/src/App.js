import React, { useState, useRef, useMemo } from "react";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import InputSample from "./InputSample";
import UserList from "./UserList";

function countActiveUser(user) {
  console.log("활성 사용자 수를 세는 중...");
  return user.filter((user) => user.active).length;
}

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

  //const count = countActiveUser(users);
  //countActiveUser가 input를 수정할 때도 호출이 된다 왜? => input를 수정하면 CreateUser에서의 username, email이 바뀌게 된다.
  //즉 바뀌는 state가 App에서 정의되어 있기 때문에 App이 다시 리렌더링이 되면서 함수가 호출이 되게 된다.
  //useMemo 훅을 이용해서 users의 내용이 완전히 바뀔 때 함수를 호출하는 거로 수정
  const count = useMemo(() => countActiveUser(users), [users]);

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
      <div>활성 사용자 수 : {count} </div>
    </div>
  );
}

export default App;
