import React, { useEffect, useContext } from "react";
import { UserDispatch } from "./App";

function User({ user }) {
  const dispatch = useContext(UserDispatch);
  useEffect(() => {
    console.log("user값이 설정됨");
    console.log(user);
    return () => {
      console.log("user가 바뀌기 전");
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        삭제
      </button>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
