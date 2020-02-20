import React from 'react';
import Post from '../feed/Post';

const Profile = () => {
  return (
    <div className="profile">
      <div
        className="header"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148258092.jpg?size=626&ext=jpg')"
        }}
      >
        <div
          className="avatar round-obj"
          style={{
            backgroundImage:
              "url('https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg')"
          }}
        ></div>
        <div className="info">
          <div className="profile-name">Elon Musk</div>
          <div className="profile-username">@elonmusk</div>
        </div>
      </div>
      <div className="prof-menu">
        <div className="following"></div>
        <div className="followers"></div>
      </div>
      <div className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Profile;
