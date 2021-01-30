import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'lalit',
    age: 24,
    message: 'random message',
  });

  const changeMessgae = () => {
    setPerson({...person, message: 'hello lalit'});
  }

  return (
  <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>{person.message}</h4>
    <button className='btn' onClick={changeMessgae}>
      change message
    </button>
  </>
  );

};

export default UseStateObject;
