import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  jaewook: {
    name: "정재욱",
    description: "정재욱 입니다.",
  },

  gildong: {
    name: "홍길동",
    description: "홍길동 입니다.",
  },
};
function Profile() {
  const { username } = useParams();

  const profile = profileData[username];
  if (!profile) return <div> 존재하지 않는 사용자 입니다.</div>;
  return (
    <div>
      <h2>
        {username} ({profile.name})
      </h2>
      <p> {profile.description}</p>
    </div>
  );
}

export default Profile;
