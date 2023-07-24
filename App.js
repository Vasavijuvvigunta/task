import './App.css';
import { useState } from "react";

const CounterComponent = () =>{
  const [counter, setCounter] = useState(0);

  const increaseCounter = () =>{
      setCounter(counter +2);
  }

return (
    <div className='App'>
      <div> 

      <h3>{counter}</h3>
    <button onClick={increaseCounter}>Button</button>
      
      </div>
    
    </div>
  );
}

export default CounterComponent;
