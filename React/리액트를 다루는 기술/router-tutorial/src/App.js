import React from 'react';
import { Route,Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from  './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        {/*Link 컴포넌트를 이용해서 다른 주소로 이동*/}
        <li><Link to = "/">홈</Link></li>
        <li><Link to = "/about">소개</Link></li>
        <li><Link to = "/profiles">프로필</Link></li>
        <li><Link to = "/history">history 예제</Link></li>
      </ul>
      {/*Route 컴포넌트 예시*/}
      <Switch>
        <Route path = "/" component = {Home} exact = {true}/>
        {/*배열로 여러 경로에서 같은 컴포넌트를 보여줄수 있다*/}
        <Route path = {['/about', '/info']} component = {About} />   
        <Route path = "/profiles" component = {Profiles} />
        <Route path = '/history' component = {HistorySample} />

        <Route render ={({location})=>{
          <div>
            <h2>이 페이지는 존재하지 않습니다.</h2>
            <p>{location.pathname}</p>
          </div>
        }} />
      </Switch>
    </div>
  );
};

export default App;