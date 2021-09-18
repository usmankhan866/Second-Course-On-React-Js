import React from "react";
import { useState } from "react/cjs/react.development";


const App = ()=>{

  const [newVal, setNewVale] = useState(0);

  const incrEvent = ()=>{
   setNewVale(newVal + 1);

  }

  const decrEvent = ()=>{
    if(newVal === 1 || newVal > 1){
    setNewVale(newVal - 1);
    }

    else if(newVal === 0){
      alert("No decrement below 0");
    }
 
   }

  return(
    <>
    
    <div className="main_div">
       <h1>{newVal}</h1>
       <button onClick={incrEvent}>Increment</button>
       <button onClick={decrEvent}>Decrement</button>
          
    </div>
    </>
  );

}

export default App;