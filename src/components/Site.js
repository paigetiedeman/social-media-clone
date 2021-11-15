import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
// import Recommended from './Recommended';
import RecList from './RecList';


function Site() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-3"><Sidebar /></div>
        <div className="col-md-6"><Feed /></div>
        <div className="col-md-3"><RecList /></div>
      </div>
    </React.Fragment>
  );
}

export default Site;