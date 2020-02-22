import React from 'react';

const Message = ({ msg, isMine }) => {
  const classify = isMine ? 'msg-mine' : 'msg-other';
  return (
    <div className={`msg ${classify}`}>
      <div className="msg-txt">{msg}</div>
    </div>
  );
};
export default Message;
