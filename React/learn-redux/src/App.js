import React from "react";
import CounterContainer from "./Container/CounterContainer";
import TodosContainer from "./Container/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
