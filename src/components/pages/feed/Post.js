import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../../actions/post';
import { FaRegThumbsUp, FaRegListAlt } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md/index';
import Moment from 'react-moment';

const Post = ({
  auth,
  addLike,
  removeLike,
  post: { _id, content, publisher, time, comments, bones, loading }
}) => {
  const { firstName, lastName, profilePicture } = publisher;

  return (
    <div className="post">
      <div className="post-user">
        <div
          className="pst-usr-avatar round-obj"
          style={{ backgroundImage: `url(${profilePicture})` }}
        />
        <div className="name">
          {firstName} {lastName}
        </div>
        <div className="pst-time">
          <Moment fromNow>{time}</Moment>
        </div>
      </div>
      <p className="post-text">{content}</p>
      <button
        className="pst-btn pst-like"
        onClick={e =>
          bones.includes(auth.user._id)
            ? removeLike(_id, auth.user._id)
            : addLike(_id, auth.user._id)
        }
      >
        <FaRegThumbsUp
          style={{
            color: `${
              bones.includes(auth.user._id) && !loading ? '#fff' : '#fce5de'
            }`
          }}
        />{' '}
        {bones.length} Like
      </button>
      <button className="pst-btn pst-comment">
        <FaRegListAlt /> {comments.length} Comment
      </button>
      {!auth.loading && auth.user._id === publisher._id && (
        <button className="pst-btn pst-comment">
          <MdDeleteForever /> Delete
        </button>
      )}
    </div>
  );
};

Post.protoTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike })(Post);
