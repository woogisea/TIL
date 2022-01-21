import React, { useState, useRef } from "react";

function InputSample() {
  const [input, setInput] = useState({
    name: "",
    nickName: "",
  });

  const inPutFocus = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onReset = () => {
    setInput({
      name: "",
      nickName: "",
    });
    inPutFocus.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        type="text"
        value={input.name}
        placeholder="이름"
        onChange={onChange}
        ref={inPutFocus}
      />
      <input
        name="nickName"
        type="text"
        value={input.nickName}
        placeholder="닉네임"
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <h2>
        값 {input.name} : ({input.nickName})
      </h2>
    </div>
  );
}

export default InputSample;
