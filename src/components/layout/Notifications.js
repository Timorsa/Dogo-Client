import React from 'react'
import NotificationItem from './NotifcationsItem';

const n = [
            {msg: 'some notification by some user' },
            {msg: 'some notification by some user' },
            {msg: 'some notification by some user' },
            {msg: 'some notification by some user' },
            {msg: 'some notification by some user' },
            {msg: 'some notification by some user' }
        ];




const Notifications = () => {
    return (
        <div className="noti-cont">
            <div className="noti-header">
                Notifications
            </div>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
            <NotificationItem/>
        </div>
    )
}

export default Notifications;