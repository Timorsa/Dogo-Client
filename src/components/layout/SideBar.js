import React from 'react';

import {
  MdPets,
  MdSettings,
  MdEvent,
  MdChatBubble,
  MdNotifications
} from 'react-icons/md/index';
import { FaUserMd, FaListAlt } from 'react-icons/fa/index';

const SideBar = () => {
  const iconSize = window.innerWidth > 1000 ? 30 : 50;
  const icoStyle = {
    paddingRight: '20px',
    marginBottom: '-10px'
    // position: 'absolute',
    // top: '50%',
    // transform: 'translateY(-50%)'
  };

  return (
    <div className="side-bar">
      <div className="cover-pic-sb">
        <div className="profile-pic-sb round-obj"></div>
        <div className="user-text">
          <div className="user-name-sb">ELON MUSK</div>
          <div className="username-sb"> @elonmusk</div>
        </div>
      </div>

      <div className="nav">
        <li className="nav-itm">
          <FaListAlt size={iconSize} style={icoStyle} />
          <span>News Feed</span>
        </li>
        <li className="nav-itm">
          <MdChatBubble size={iconSize} style={icoStyle} />
          <span>Messenger</span>
        </li>
        <li className="nav-itm">
          <MdEvent size={iconSize} style={icoStyle} />
          <span>Events</span>
        </li>
        <li className="nav-itm itm-mbl">
          <MdNotifications size={iconSize} style={icoStyle} />
          <span>notification</span>
        </li>
        <li className="nav-itm">
          <FaUserMd size={iconSize} style={icoStyle} />
          <span>Vetrinary</span>
        </li>
        <div className="itm-bt">
          <li className="nav-itm ">
            <MdSettings size={iconSize} style={icoStyle} />
            <span>Settings</span>
          </li>
          <li className="nav-itm ">
            <MdPets size={iconSize} style={icoStyle} />
            <span>Manage Pets</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
