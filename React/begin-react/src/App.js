import React, {useState, useRef} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import './App.css';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


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

  

  const [users, setUsers] = useState([
    {
      id : 1,
      username : 'jaewook',
      email : 'test1@gmail.com',
      active : true
    },

    {
      id : 2,
      username : 'jaewook2',
      email : 'test2@gmail.com',
      active : false
    },

    {
      id : 3,
      username : 'jaewook3',
      email : 'test3@gmail.com',
      active : false
    }
  ]);


  const [inputs, setInputs] = useState({
    username : ' ',
    email : ' '
  });

  const {username, email} = inputs;
  const onChange = e => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };

  const nextId = useRef(4);        //useRef에 파라미터를 넣어주면 current의 기본값이 된다.
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    };

    // 배열에 항목 추가하기
    setUsers(users.concat(user));
    // setUsers([...users, user]);

    setInputs({
      username : ' ',
      email : ' ',
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    //userid가 일치하지 않는 것들만 추출해서 새로운 배열을 만든다.
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    );
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
        <InputSample />
        <br />
        <CreateUser username = {username} email = {email} onCreate = {onCreate} onChange = {onChange} />
        <UserList users = {users}  onRemove = {onRemove} onToggle = {onToggle} />
      </div>
    </>    //두개 이상의 태그는 꼭 하나의 태그로 감싸주어여 한다. 불필요한 div로 감싸지 않기 위해서 <>(Fragment)를 사용하기도 한다.
  );
}

export default App;
