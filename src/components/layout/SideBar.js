import React from 'react'

const SideBar = () => (
        <div className='side-bar'>
               <div className="cover-pic-sb">
            <div className="profile-pic-sb round-obj"></div>
            <div className="user-text">
            <div className="user-name-sb">John Doe</div>
            <div className="username-sb">@jondoe</div>
        </div>
        </div>
   
    <ul className='nav'>
        <li className="nav-itm">News Feed</li>
        <li className="nav-itm">Messenger</li>
        <li className="nav-itm">Events</li>
        <li className="nav-itm">Vetrinary</li>
        <li className="nav-itm itm-mbl">notification</li>
        <div className="itm-bt">
        <li className="nav-itm ">Settings</li>
        <li className="nav-itm " >Manage Pets</li>
    </div>
    </ul> 
        </div>
    
)

 export default SideBar;