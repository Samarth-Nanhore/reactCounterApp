import React, { useState } from 'react';
import './App.css'



function App() {
 const [count, setCount] = useState(0); 

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }
  const handleDecrement = () => {
    setCount((prev) => prev - 1)
  }
  
  
  
  return (
    <main>
      <div style={{textAlign:"center"}}>
      <h1>Simple Counter</h1> 
      <br></br>
      <button style={{ padding: "1rem", margin: "1rem" }}
      onClick= {handleIncrement}
        >+</button>
      <button style={{ padding: "1rem", margin: "1rem" }}
       onClick = {handleDecrement} 
        >-</button>

        <button
          style={{ padding: "1rem", margin: "1rem" }}
          onClick={() => setCount(0)}>Reset</button>

    <p>The count is : {count} </p>
      </div>
    </main>
  );
}

export default App;