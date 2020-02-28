import React from 'react';
import NotificationItem from './NotificationItem';
import { MdNotifications } from 'react-icons/md/index';

const Notifications = () => {
  return (
    <div className="noti-cont">
      <div className="noti-header">Notifications</div>
      <NotificationItem />
    </div>
  );
};

export default Notifications;
