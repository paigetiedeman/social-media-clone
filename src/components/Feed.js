import React from 'react';
import Post from './Post';
import miniImage from './../img/mini.png';
import waves from './../img/waves.png';
import rose from './../img/rose.png';

const postList = [
  {
    names: 'Lorem Ipsum',
    pics: rose,
    message: 'Neque aliquam vestibulum morbi.'
  },
  {
    names: 'Lorem Ipsum',
    pics: miniImage,
    message: 'Suspendisse faucibus interdum.'
  },
  {
    names: "First Last",
    pics: waves,
    message: "la djhdsikhns shdkn"
  }
];

function Feed(){
  return (
    <React.Fragment>
      <div className="feed">
        <div className="row">
          <div className="col-2">
          <img className="mini-image" src={miniImage}></img>
          </div>
          <div className="col-6 bar">
          <input type="text" className="form-control" placeholder="What's happening?"/>
          </div>
          <div className="col-3 bar">
          <button className="btn btn-outline-secondary">Holler</button>
          </div>
        {postList.map((friend, index) => 
          <Post names={friend.names}
          message={friend.message}
          pics={friend.pics}
          key={index}/>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}


export default Feed;