import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

const CompB =  ()=> {
  
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    
    return (
      <h1>This is {fname} {lname} </h1>
    );

}

export default CompB;