import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa/index';
import ChatRoomItem from './ChatRoomItem';

const Messenger = () => {
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
