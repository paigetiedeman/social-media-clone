import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <React.Fragment>
      <div className="post">
        <div className="row">
          <div className="col">
            <img className="mini-image" src={props.pics}></img>
          </div>
          <div className="col-9">
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
  message: PropTypes.string,
  pics: PropTypes.string
};

export default Post;