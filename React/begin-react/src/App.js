import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black' ,
    color : 'aqua',
    fontSize : 24,
    padding : '1rem',
  };

  const line = {
    border : '5px solid blue',
  };

  return (
    //컴포넌트는 쉽게 재사용이 가능
    //태그를 열었으면 꼭 닫아주어야 한다
    //열리고 바로 감싸주는 self closing
    <>      
      <div style = {line}>
          <Hello color = 'red'/>               {/*props의 사용*/}    
          <Wrapper>
            <Hello color = 'pink' />
            <Hello name = 'react' color = 'blue' />
          </Wrapper>
          <div style = {style}>{name}</div>      {/*인라인 태그*/}
          <div className = "gray-box"></div>    {/*외부 css 파일 사용*/} 
          <br />
          <input />
      </div>
      <div>
        <Counter />
        <br />
      </div>
    </>    //두개 이상의 태그는 꼭 하나의 태그로 감싸주어여 한다. 불필요한 div로 감싸지 않기 위해서 <>(Fragment)를 사용하기도 한다.
  );
}

export default App;
