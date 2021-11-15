import React from 'react';
import PropTypes from 'prop-types';
import profileImage from './../img/profile.png';


function Recommended(props) {
  return (
    <React.Fragment>
      <div className="recommended">
        <h3>Recommended Friends</h3>
        <div className="row">
          <div className="col">
            <img src={profileImage} alt="profile image"></img>
          </div>
          <div className="col">
            <h3>
              <strong>{props.names}</strong>
            </h3>
            <button className="btn btn-outline-primary">Add Friend</button>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <img src={profileImage} alt="profile image"></img>
          </div>
          <div className="col">
            <p>Lorem Ipsum</p>
            <button className="btn btn-outline-primary">Add Friend</button>
            <h3>
              <strong>{props.names}</strong>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={profileImage} alt="profile image"></img>
          </div>
          <div className="col">
            <p>Lorem Ipsum</p>
            <button className="btn btn-outline-primary">Add Friend</button>
            <h3>
              <strong>{props.names}</strong>
            </h3>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
}

Recommended.propTypes = {
  names: PropTypes.string
};

export default Recommended;
