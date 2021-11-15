import React from 'react';
import PropTypes from 'prop-types';
import profileImage from './../img/profile.png';

function Post(props) {
  return (
    <React.Fragment>
      <div className="post">
        <div className="row">
          <div className="col">
            <img src={profileImage} alt="profile image"></img>
          </div>
          <div className="col">
            <h3><strong>{props.names}</strong></h3>
            <p>{props.message}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  names: PropTypes.string,
  message: PropTypes.string
};

export default Post;