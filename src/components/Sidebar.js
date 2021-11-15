import React from 'react';

function Sidebar() {
  return(
    <React.Fragment>
      <div className="sidebar">
        <div className="profile">
          <h3>Jane Doe</h3>
          <p>Hollers</p>
          <p>Following</p>
          <p>Followers</p>
        </div>
        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;