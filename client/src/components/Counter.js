import React, { useState } from "react";
import {Button} from 'semantic-ui-react'

const Counter = () => {
 
  const [count, setCount] = useState(0);

 
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  
  return (
    <div style={styles.button}>
        
        <h5> {count}</h5>
        <Button color = 'white'onClick={handleIncrement}>Likes</Button>
      </div>
      
  );
}
const styles = {
  button: {
  display: 'flex',
  padding: '0',
  margin: '0',
  justifyContent: "space-around",
    
  },
};


export default Counter;
