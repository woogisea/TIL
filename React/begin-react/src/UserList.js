import React from 'react';

//컴포넌트 재사용
//map 활용
function User ({user}) {
    return (
        <div>
            <b>{user.username}</b><span>({user.email})</span>
        </div>
    );
}
function UserList({users}) {
    return(
        <div>
            {/*배열 렌더링 할때는 고유key값이 필요하다*/}
           {users.map(user  => (
               <User user = {user} key = {user.id}/>
           ))}
        </div>
    );
}
export default UserList;