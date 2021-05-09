import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
   <div className="App">
     <div className="buttons">
       <Button size = "large" onClick = {() => console.log("클릭")}>BUTTON</Button>
       <Button>Button</Button>
       <Button size = "small">BUTTON</Button>
     </div>
     <div className="buttons">
       <Button size = "large" color = "gray">BUTTON</Button>
       <Button color = "gray">Button</Button>
       <Button size = "small" color = "gray">BUTTON</Button>
     </div>
     <div className="buttons">
       <Button size = "large" color = "pink">BUTTON</Button>
       <Button color = "pink">Button</Button>
       <Button size = "small" color = "pink">BUTTON</Button>
     </div>
     <div className="buttons">
       <Button size = "large" color = "blue" outline>BUTTON</Button>
       <Button color = "gray" outline>Button</Button>
       <Button size = "small" color = "pink" outline>BUTTON</Button>
     </div>
     <div className="buttons">
       <Button size = "large" color = "blue" fullWidth>BUTTON</Button>
       <Button size = "large" color = "gray" fullWidth>BUTTON</Button>
       <Button size = "large" color = "pink" fullWidth>BUTTON</Button>
     </div>
   </div>
  );
}

export default App;
