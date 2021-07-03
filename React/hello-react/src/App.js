import logo from './logo.svg';
import './App.css';

function App() {
  const name = "react";
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : 16
  };

  return (
    //요소 여러개를 부모 요소 하나에 의해서 감싸기, Fragment(<>, </>)
    <>                           {/*JS 조건식 사용과 if문 사용*/}
      {name === 'react' ? (
        <h1>{name} React</h1>
      ) : (
        <h2>React Study</h2>
      )}

      {name === 'react' && <h1>React</h1>}          {/*And 조건식 사용*/}

      <div style = {style}>{name}</div>              {/*inline styling*/}

      <div className = 'react'>{name}</div>          {/*css class 사용*/}
    </>
  )
}

export default App;
