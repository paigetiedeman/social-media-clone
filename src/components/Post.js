import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <img src="https://placehold.it/"></img>
      <h3><strong>{props.names}</strong></h3>
      <p>{props.message}</p>
    </React.Fragment>
  );
}

Post.propTypes = {
  names: PropTypes.string,
  message: PropTypes.string
};

export default Post;