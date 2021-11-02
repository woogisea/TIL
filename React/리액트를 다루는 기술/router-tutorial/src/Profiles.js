import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

//서브 라우트의 활용
const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li><Link to = "/profiles/velopert">velopert</Link></li>
                <li><Link to = "/profiles/jaewook">jaewook</Link></li>
            </ul>

            {/*render를 통해 JSX를 넣어줄수 있다*/}
            <Route path = "/profiles" exact render = {()=><div>사용자를 선택해 주세요</div>} />
            <Route path = "/profiles/:username" component = {Profile}/>
        </div>
    );
};

export default Profiles;