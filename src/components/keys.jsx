import React from 'react';

const Keys = () => {

const KeysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

return (
  <div>
  {KeysArray.map(() =>
    <button>hit</button> )}
  </div>
)
}

export default Keys;
