import React, { useState } from "react";
import {Button} from 'semantic-ui-react'

const Counter = () => {
 
  const [count, setCount] = useState(0);

 
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  
  return (
    <div>
        
        <h5> {count}</h5>
        <Button onClick={handleIncrement}>Likes</Button>
      </div>
      
  );
}

export default Counter;
