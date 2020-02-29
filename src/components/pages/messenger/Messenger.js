import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa/index';
import ChatRoomItem from './ChatRoomItem';
import {TweenMax, Power2} from 'gsap';
const Messenger = () => {
  useEffect(()=>
    {
      TweenMax.from('.msngr-cont , .chat-room-item', 0.8, {
        delay: 0.4,
        boxShadow: 'none',
        ease: Power2.easeOut
      });
      TweenMax.from('.avatar', 0.5, {
        delay: 0.8,
        boxShadow: 'none',
        ease: Power2.easeOut
      });
    },[])
  return (
    <div className="msngr-cont">
      <div className="search">
        <input
          type="text"
          name="search"
          className="search-input"
          placeholder="need to write place holder..."
        />
        <button className="search-btn round-obj">
          <FaSearch size={24} />
        </button>
      </div>
      <div className="chat-room-list">
        <Link
          to="/app/chat"
          style={{ textDecoration: 'none', color: '#000000' }}
        >
          <ChatRoomItem />
        </Link>
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
      </div>
    </div>
  );
};

export default Messenger;
