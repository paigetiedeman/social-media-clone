import Recommended from './Recommended';
import React from 'react';

const recList = [
  {
    names: 'Lorem Ipsum2'
  },
  {
    names: 'First Last'
  },
  {
    names: 'Lorem Ipsum3'
  }
];

function RecList(){
  return(
    <React.Fragment>
      <div className="recommended">
      <h3>Recommended Friends</h3>
      {recList.map((friend, index) => 
          <Recommended names={friend.names}
          key={index}/>
          )}
      </div>
    </React.Fragment>
  );
}

export default RecList;