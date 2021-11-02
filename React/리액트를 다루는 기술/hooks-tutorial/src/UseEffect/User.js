import React, { useState, useRef, useEffect } from 'react';

const UserList = ({user, onRemove, onToggle}) => {
    useEffect(() => {
        console.log(user)
        console.log('마운트')
        return () => {
            console.log('언마운트')
        }
    }, [user])
    return (
        <>
            <li onClick = {()=>onRemove(user.id)} style = {{ color : user.active ? 'green' : 'black'}}>{user.username} ({user.email})</li>
            <button onClick = {() => onToggle(user.id)}>토글</button>
        </>
    );
}

const User = () => {
    const [users,setUsers] = useState([
        {
          id : 1,
          username : 'velopert',
          email : "aaa@aaa.com",
          active : false
        }
    ])
    const nextId = useRef(2);
    
    const [form, setForm] = useState({
        username : '',
        email : ''
    })

    const { username, email } = form;


    const onChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name] : value
        })
    };

    const onSubmit = e => {
        e.preventDefault();
    
        const nextUser = {
            id : nextId.current,
            username,
            email,
            active : false
        }
    
        setUsers(users.concat(nextUser));
        setForm({
            username : '',
            email : ''
        })
        nextId.current++;
    }

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    const onToggle = id => {
        setUsers(users.map(user => (user.id === id ? {...user, active : !user.active} : user)));
    }

    return (
        <div>
            <form onSubmit = {onSubmit}> 
                <input type="text" placeholder = "아이디" value = {form.username} name = "username" onChange = {onChange} />
                <input type="text" placeholder = "이메일" value = {form.email} name = "email" onChange = {onChange} />
                <button>입력</button>
            </form>
            {users.map(user => (
                <UserList user = {user} key = {user.id} onRemove = {onRemove} onToggle = {onToggle}/>
            ))}
        </div>
    );
};

export default User;