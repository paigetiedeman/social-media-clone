import React from 'react';
import PropTypes from 'prop-types';
import profileImage from './../img/profile.png';


function Recommended(props) {
  return (
    <React.Fragment>
        <div className="row">
          <div className="col">
            <img src={profileImage} alt="profile image"></img>
          </div>
          <div className="col">
            <h4>
              <strong>{props.names}</strong>
            </h4>
            <button className="btn btn-outline-primary">Add Friend</button>
          </div>
      </div>
    </React.Fragment>
  );
}

Recommended.propTypes = {
  names: PropTypes.string
};

export default Recommended;
