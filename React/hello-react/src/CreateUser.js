import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
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
