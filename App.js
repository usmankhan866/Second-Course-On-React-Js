import React, { useState } from 'react';

/* React Hooks: it was introduced in react version of 16.8
   They let you use of state and other React features without writing a class.
   it is only used inside the top of react functional components (not the oustide).
   React Hook "useState" cannot be called at the top level. React Hooks must be called in a 
   React function component or a custom React Hook function 
*/

let count = 1;
 
const App = ()=>{

  /* useState() method: It will return an array containing two items 1:undefined (which is a state object also called current data)
     2: function (which is called updated function also called updated data).
     if u pass any value/data to useState its called intial Data which is equal to intial Data = 
     current Data , updated Data.
   */   
  
  const state = useState();
  // console.log(state);

  /* if we pass any value to useState() it will be the current value of count (state). and setCount is function whose
     value will be the update value of count state (mean if we assign a value to setCount so the count state value will be
      change from intial value (mean from value of useState) to value setCount function)
  */    
//  Array Destructuring
  const [count, setCount] = useState(0);

const IncrMnt = () =>{

  setCount(count + 1);
  // console.log('clicked ' + count++);
}

  return(

    <> 
    
         <div> {count} </div>
         <button onClick={IncrMnt}> Click Me </button>
    </>
  );
}


export default App;
