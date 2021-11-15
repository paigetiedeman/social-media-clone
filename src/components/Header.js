import React from 'react';

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="btn-group" role="group">
          <button className="btn btn-outline-secondary" type="button">Home</button>
          <button className="btn btn-outline-secondary" type="button">Notifications</button>
          <button className="btn btn-outline-secondary" type="button">Messages</button>
          </div>
          <h1 className="rainbow-text">Make Friends</h1>
        <div className="row">

          <div className="col-8">
          <input
            className="form-control mr-sm-2 form-inline"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          </div>
          <div className="col-4">
          <button
            className="btn btn-outline-primary my-2 my-sm-0 form-inline"
            type="submit"
          >
            Holler
          </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
