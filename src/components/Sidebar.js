import React from 'react';
import ProfilePic from '../img/profile.png';

function Sidebar() {
  return(
    <React.Fragment>
      <div className="sidebar">
        <div className="profile">
          <img  className="profile-pic" src={ProfilePic} alt="user's profile picture"/>
          <h3>Jane Doe</h3>
          <button className="btn btn-outline-primary">Hollers</button>
          <button className="btn btn-outline-primary">Following</button>
          <button className="btn btn-outline-primary">Followers</button>
        </div>
        <div className="bio">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;