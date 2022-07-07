import { useParams } from 'react-router-dom';

const data = {
  jaewook: {
    name: '정재욱',
  },
  jaewook1: {
    name: '정재욱1',
  },
  jaewook2: {
    name: '정재욱2',
  },
};

function Profile() {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}
    </div>
  );
}

export default Profile;
