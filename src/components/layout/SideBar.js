import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TweenMax, Expo } from 'gsap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {
  MdPets,
  MdSettings,
  MdEvent,
  MdChatBubble,
  MdNotifications
} from 'react-icons/md/index';
import { FaUserMd, FaListAlt } from 'react-icons/fa/index';

const SideBar = ({ auth: { user, isAuthenticated, loading }, logout }) => {
  // const authLinks = ();
  // const guestLinks = ();

  useEffect(() => {
    if (!loading) {
      TweenMax.to('.side-bar', 0.5, {
        delay: 0.5,
        opacity: 1,
        // x: -200,
        ease: Expo.easeIn
      });
      TweenMax.from('.side-bar', 0.7, {
        delay: 0.4,
        boxShadow: 'none',
        ease: Expo.easeOut
      });
      TweenMax.to('.nav-itm', 0.4, {
        delay: 0.8,
        opacity: 1,
        ease: Expo.easeIN
      });
    }
  }, []);

  const iconSize = 30;
  const icoStyle = {
    paddingRight: '20px',
    marginBottom: '-10px'
  };

  if (loading === false) {
    console.log(user);
    const {
      userName,
      firstName,
      lastName,
      profilePicture,
      coverPicture
    } = user;

    return (
      <div className="side-bar">
        <Link to="/app/profile" className="link">
          <div
            className="cover-pic-sb"
            style={{ backgroundImage: `url(${coverPicture})` }}
          >
            <div
              className="profile-pic-sb round-obj"
              style={{ backgroundImage: `url(${profilePicture})` }}
            ></div>
            <div className="user-text">
              <div className="user-name-sb">
                {firstName} {lastName}
              </div>
              <div className="username-sb"> {userName}</div>
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
              <Link
                to="./
              "
                className="link ash"
              >
                <MdPets size={iconSize} style={icoStyle} />
                <span>Log Out</span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    );
  } else return <div>not loaded</div>;
};

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(SideBar);
