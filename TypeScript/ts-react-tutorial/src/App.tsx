import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';

function App () {
  const onClick = (name : string) => {
    console.log(`${name} says hello`);
  }

  const onSubmit = (form : {name : string, description : string}) => {
    console.log(form);
  }
  return (
    <div>
      <Greetings name = "Hello" onClick = {onClick}/>
      <Counter />
      <MyForm onSubmit = {onSubmit}/>
      <ReducerSample />
    </div>
  );
};

export default App;