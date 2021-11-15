import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar fixed-top navbar-light bg-light">
        <p className="navbar-brand" >Home</p>
        <p className="navbar-brand" >Notifications</p>
        <p className="navbar-brand" >Messages</p>
        <h1 className="navbar-brand" >Make Friends</h1>
        <form className="form-inline">
          <input className="form-control mr-sm-2 form-inline" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0 form-inline" type="submit">Holler</button>
        </form>
      </nav>
    </React.Fragment>
  );
}

export default Header;