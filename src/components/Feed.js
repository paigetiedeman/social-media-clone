import React from 'react';
import Post from './Post';
import miniImage from './../img/mini.png';

const postList = [
  {
    names: 'Lorem Ipsum',
    message: 'Neque aliquam vestibulum morbi.'
  },
  {
    names: 'Lorem Ipsum',
    message: 'Suspendisse faucibus interdum.'
  }
];

function Feed(){
  return (
    <React.Fragment>
      <div className="feed">
        <div className="row">
          <div className="col">
          <img className="mini-image" src={miniImage} alt="square image"></img>
          </div>
          <div className="col">
          <input type="text" className="form-control" placeholder="What's happening?"/>
          </div>
          <div className="col">
          <button className="btn btn-outline-secondary">Holler</button>
          </div>
        {postList.map((post, index) => 
          <Post names={post.names}
          message={post.message}
          key={index}/>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Feed;