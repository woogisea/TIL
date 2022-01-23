import React, { useMemo, useReducer } from "react";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
import InputSample from "./InputSample";
import UserList from "./UserList";

function countActiveUser(user) {
  console.log("활성 사용자 수를 세는 중...");
  return user.filter((user) => user.active).length;
}

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      return state;
  }
}

const initialState = {
  users: [
    {
      id: 1,
      username: "jaewook",
      email: "aaa@aaa.com",
      active: true,
    },

    {
      id: 2,
      username: "bbb",
      email: "bbb@bbb.com",
      active: false,
    },
  ],
};

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  //const count = countActiveUser(users);
  //countActiveUser가 input를 수정할 때도 호출이 된다 왜? => input를 수정하면 CreateUser에서의 username, email이 바뀌게 된다.
  //즉 바뀌는 state가 App에서 정의되어 있기 때문에 App이 다시 리렌더링이 되면서 함수가 호출이 되게 된다.
  //useMemo 훅을 이용해서 users의 내용이 완전히 바뀔 때 함수를 호출하는 거로 수정
  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <Counter />
      <InputSample />
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count} </div>
    </UserDispatch.Provider>
  );
}

export default App;
