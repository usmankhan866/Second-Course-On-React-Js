import React from "react"
import {add, sub, mult, div} from './Calculator';


function App(){

  return(
<div>
     <ol>
      <li>The sum of two no is  { add(40, 4) } </li>
      <li>The sub of two no is  { sub(30, 3) } </li>
      <li>The Div of two no is  { div(10, 3) } </li>
      <li>The mult of two no is { mult(10, 3) } </li>
     </ol>
  </div>
);

  }

  export default App;

   