import React from 'react';
import Post from '../feed/Post';

import { MdEvent } from 'react-icons/md/index';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa/index';

const Profile = () => {
  return (
    <div className="profile">
      <div
        className="header"
        style={{
          backgroundImage:
            "url('https://www.sightunseen.com/content/uploads/2016/07/Flat-Vernacular-Heavens-Wallpaper-opener3.jpg')"
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
        <div className="following prof-menu-itm">
          <FaUserAlt className="prof-icon" />
          <div className="flw-num">50</div>
          <div className="itm-name">Following</div>
        </div>
        <div className="followers prof-menu-itm">
          <FaUserFriends className="prof-icon" />
          <div className="flw-num">50</div>
          <div className="itm-name">Followers</div>
        </div>
        <div className="followers prof-menu-itm">
          <MdEvent className="prof-icon" />
          <div className="itm-name">Events</div>
        </div>
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
