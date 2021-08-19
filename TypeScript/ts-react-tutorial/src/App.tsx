import React from 'react';
import Greetings from './Greetings';

function App () {
  const onClick = (name : string) => {
    console.log(`${name} says hello`);
  }
  return (
    <div>
      <Greetings name = "Hello" onClick = {onClick}/>
    </div>
  );
};

export default App;