/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
 /*
 * Local import
 */
 /*
 * Code
 */
const Post = ({ title, category, content }) => (
  <div className="post">
    <div className="post-title">{title}</div>
    <div className="post-category">{category}</div>
    <div className="post-content">{content}</div>
  </div>
);
Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
 /*
 * Export default
 */
export default Post;