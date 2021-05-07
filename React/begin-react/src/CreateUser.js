import React from 'react';

function CreateUser({username, email, onCreate, onChange})
{
    return(
        <div>
            <input name = "username" onChange = {onChange} value = {username} placeholder = "계정명" />
            <input name = "email" onChange = {onChange} value = {email} placeholder = "이메일" />
            <button onClick = {onCreate}>등록</button>
        </div>
    );
}
export default CreateUser;