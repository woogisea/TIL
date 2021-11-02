import React from 'react';

//컴포넌트 재사용
//map 활용
function User ({user, onRemove, onToggle}) {
    return (
        <div>
            <b style = {{cursor : 'pointer', color : user.active ? 'green' : 'black'}} onClick = {() => onToggle(user.id)}>{user.username}</b><span>({user.email})</span>
            <button onClick = {() => onRemove(user.id)}>삭제</button>
        </div>
    );
}
function UserList({users, onRemove, onToggle}) {
    return(
        <div>
            {/*배열 렌더링 할때는 고유key값이 필요하다*/}
           {users.map(user  => (
               <User user = {user} key = {user.id} onRemove = {onRemove} onToggle = {onToggle} />
           ))}
        </div>
    );
}
export default UserList;