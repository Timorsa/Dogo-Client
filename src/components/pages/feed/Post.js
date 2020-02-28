import React from 'react';
import { FaRegThumbsUp, FaRegListAlt } from 'react-icons/fa';
const Post = () => {
  return (
    <div className="post">
      <div className="post-user">
        <div className="pst-usr-avatar round-obj" />
        <div className="name">Elon Fusk</div>
        <div className="pst-time">2 mins</div>
      </div>
      <p className="post-text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <botton className="pst-btn pst-comment">
        <FaRegThumbsUp /> Like
      </botton>
      <botton className="pst-btn pst-comment">
        <FaRegListAlt /> Comment
      </botton>
    </div>
  );
};

export default Post;
