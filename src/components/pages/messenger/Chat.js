import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md/index';
import Message from './Message';

const Chat = () => {
  return (
    <div className="chat">
      <div className="banner">
        <Link className="back-btn" to="/app/messenger">
          <MdArrowBack size={40} />
        </Link>
        <div className="avatar round-obj"></div>
        <div className="name-bnr">Timor Safadi</div>
        <span className="status online round-obj"></span>
      </div>
      <div className="conv-cont">
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={false}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={false}
          msg={
            'bla bla lba bla dsdf sdfsfsdf   sdfsdf  asdsdasd  asDASDAS AS DASDsd  sdsdas SDSD  SDASD  asd dfsdbla lba bla lba'
          }
          time={'17:00'}
        />
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />{' '}
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={false}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={false}
          msg={
            'bla bla lba bla dsdf sdfsfsdf   sdfsdf  asdsdasd  asDASDAS AS DASDsd  sdsdas SDSD  SDASD  asd dfsdbla lba bla lba'
          }
          time={'17:00'}
        />
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />{' '}
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={false}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
        <Message
          isMine={false}
          msg={
            'bla bla lba bla dsdf sdfsfsdf   sdfsdf  asdsdasd  asDASDAS AS DASDsd  sdsdas SDSD  SDASD  asd dfsdbla lba bla lba'
          }
          time={'17:00'}
        />
        <Message
          isMine={true}
          msg={'bla bla lba bla bla lba bla lba'}
          time={'17:00'}
        />
      </div>
      <div className="input">
        <input
          type="text"
          name="search"
          className="chat-input"
          placeholder="need to write place holder..."
        />
      </div>
    </div>
  );
};

export default Chat;
