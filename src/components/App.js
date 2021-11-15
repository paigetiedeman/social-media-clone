import Header from './Header.js';
// import Feed from './Feed.js';
// import Recommended from './Recommended.js';
import Sidebar from './Sidebar.js';
import React from "react";
import "../App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      {/* <Feed />
      <Recommended /> */}
    </React.Fragment>
  );
}

export default App;
