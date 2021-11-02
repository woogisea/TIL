import React from 'react';

const data = {
    velopert : {
        name : '김민준',
        description : '리액트를 좋아하는 개발자'
    },

    jaewook : {
        name : '정재욱',
        description : '리액트'
    }
}

//컴포넌트에서 받아오는 match 안에는 params값을 참조, username값을 참조한다.
//URL을 통해서 받아오기
const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않는 개발자</div>
    }
    return (
        <div>
            <h1>{username} ({profile.name})</h1>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;