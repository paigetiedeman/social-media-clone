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
      <div className="container">
        <form className="form-inline">
          <img className="mini-image" src={miniImage} alt="square image"></img>
          <input type="text" className="form-control" placeholder="What's happening?"/>
        </form>
        {postList.map((post, index) => 
          <Post names={post.names}
          message={post.message}
          key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default Feed;