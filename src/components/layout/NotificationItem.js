import React from 'react';

const NotificationItem = () => {
  return (
    <div className="noti-itm">
      <img
        className="noti-avatar round-obj"
        src="https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg"
        alt="profile pictures"
      />
      <h3 className="noti-content">
        Taika Wakiki
        <br />
        some notification by some user
      </h3>
      <span className="noti-time">5 hr</span>
    </div>
  );
};

export default NotificationItem;

//
