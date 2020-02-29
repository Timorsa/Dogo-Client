import React, {useEffect} from 'react';
import NotificationItem from './NotificationItem';
import { MdNotifications } from 'react-icons/md/index';
import {TweenMax, Power2} from 'gsap';

const Notifications = () => {

  useEffect(() => {
    TweenMax.to('.noti-cont', 0.5, {
      delay: 0.5,
      opacity: 1,
      ease: Power2.easeIn
    });
    TweenMax.from('.noti-cont', 0.5, {
      delay: 0.4,
      boxShadow: 'none',
      ease: Power2.easeIn
    });
    TweenMax.to('.noti-header', 0.4, {
      delay: 0.8,
      opacity: 1,
      ease: Power2.easeIn
    });
  }, []);

  return (
    <div className="noti-cont">
      <div className="noti-header">Notifications</div>
      <NotificationItem />
    </div>
  );
};

export default Notifications;
