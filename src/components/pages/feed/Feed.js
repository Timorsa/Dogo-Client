import React, { useEffect, useState } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts, createPost } from '../../../actions/post';

import { TweenMax, Expo, Power2 } from 'gsap';

const Feed = ({
  getPosts,
  createPost,
  post: { feed, loading },
  user: { _id }
}) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    getPosts(_id);

    TweenMax.to('.feed-input', 0.5, {
      delay: 0.5,
      opacity: 1,
      ease: Expo.easeIn
    });
    // TweenMax.from('.feed-input ', 0.5, {
    //   delay: 0.3,
    //   opacity: 1,
    //   boxShadow: 'none',
    //   ease: Power2.easeOut
    // });
    if (!loading) {
      // TweenMax.from('.post-btn', 0.4, {
      //   delay: 0.8,
      //   boxShadow: 'none',
      //   ease: Power2.easeOut
      // });
      // TweenMax.from('.post', 0.5, {
      //   delay: 0.7,
      //   boxShadow: 'none',
      //   ease: Power2.easeIn
      // });
      TweenMax.to('.post', 0.5, {
        delay: 0.5,
        opacity: 1,
        ease: Power2.easeIn
      });
    }
  }, [getPosts, _id, loading, feed]);

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="feed">
      <form
        onSubmit={e => {
          e.preventDefault();
          createPost(_id, content);
          setContent('');
        }}
      >
        <input
          type="text"
          value={content}
          name="search"
          className="feed-input"
          onChange={e => setContent(e.target.value)}
          placeholder="write something.."
        />
        <button className="post-btn" value="submit">
          Post
        </button>
      </form>
      {feed.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

Feed.propTypes = {
  createPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  user: state.auth.user
});

export default connect(mapStateToProps, { getPosts, createPost })(Feed);
