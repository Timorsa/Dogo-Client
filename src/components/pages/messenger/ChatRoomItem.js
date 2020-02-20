import React from 'react';

const ChatRoomItem = () => {
  return (
    <div className="chat-room-item">
      <div
        className="avatar round-obj"
        style={{
          backgroundImage:
            'url("https://avatars0.githubusercontent.com/u/48487764?s=400&u=bdf3fe9df2b7921bd71d2a417824eca04d235871&v=4")'
        }}
      ></div>

      <div className="item-stuff">
        <div className="user-info">Timor Safadi</div>

        <div className="last-msg">
          lorem somehtns asdfsdf as safff odfma sadkas sadasd{' '}
        </div>
      </div>

      <span className="time">5 hrs </span>
    </div>
  );
};

export default ChatRoomItem;
