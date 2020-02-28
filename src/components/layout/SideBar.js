import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdPets,
  MdSettings,
  MdEvent,
  MdChatBubble,
  MdNotifications
} from 'react-icons/md/index';
import { FaUserMd, FaListAlt } from 'react-icons/fa/index';

const SideBar = () => {
  const iconSize = 30;
  const icoStyle = {
    paddingRight: '20px',
    marginBottom: '-10px'
    // position: 'absolute',
    // top: '50%',
    // transform: 'translateY(-50%)'
  };

  return (
    <div className="side-bar">
      <Link to="/app/profile" className="link">
        <div className="cover-pic-sb">
          <div className="profile-pic-sb round-obj"></div>
          <div className="user-text">
            <div className="user-name-sb">ELON MUSK</div>
            <div className="username-sb"> @elonmusk</div>
          </div>
        </div>
      </Link>

      <div className="nav">
        <li className="nav-itm">
          <Link to="/app/feed" className="link ash">
            <FaListAlt size={iconSize} style={icoStyle} />
            <span>News Feed</span>
          </Link>
        </li>
        <li className="nav-itm">
          <Link to="/app/messenger" className="link ash">
            <MdChatBubble size={iconSize} style={icoStyle} />
            <span>Messenger</span>
          </Link>
        </li>
        <li className="nav-itm">
          <Link to="/app/events" className="link ash">
            <MdEvent size={iconSize} style={icoStyle} />
            <span>Events</span>
          </Link>
        </li>
        <li className="nav-itm itm-mbl">
          <Link to="/app/events" className="link ash">
            <MdNotifications size={iconSize} style={icoStyle} />
            <span>notification</span>
          </Link>
        </li>
        <li className="nav-itm">
          <Link to="/app/vet" className="link ash">
            <FaUserMd size={iconSize} style={icoStyle} />
            <span>Vetrinary</span>
          </Link>
        </li>
        <div className="itm-bt">
          <li className="nav-itm ">
            <Link to="/app/settings" className="link ash">
              <MdSettings size={iconSize} style={icoStyle} />
              <span>Settings</span>
            </Link>
          </li>
          <li className="nav-itm ">
            <Link to="/app/pets" className="link ash">
              <MdPets size={iconSize} style={icoStyle} />
              <span>Manage Pets</span>
            </Link>
          </li>
          <li className="nav-itm ">
            <a href="/" className="link ash">
              <MdPets size={iconSize} style={icoStyle} />
              <span>Log Out</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
