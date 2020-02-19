import React from 'react'

const NotifcationsItem = (props) => {
    return (
        <div className='noti-itm'>
            <img className='noti-avatar round-obj' src='https://i.insider.com/5ddfa893fd9db26b8a4a2df7?width=1100&format=jpeg&auto=webp' />
            <h3 className='noti-name'>Elon Tusk</h3>
            <h4 className='noti-msg'>some notification by some user</h4>
            <span className='noti-time'>5 hr</span>
        </div>
    )
}

export default NotifcationsItem
