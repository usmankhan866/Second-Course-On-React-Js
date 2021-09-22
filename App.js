import React, { createContext } from "react";
import CompA from './CompA'

// Using Context Api

const FirstName = createContext();
const LastName = createContext();

const App =  ()=> {

  
  return (
    <>
    <FirstName.Provider value= {'Mohammad'}>
      <LastName.Provider value={'Usman'}>
         <CompA />
    </LastName.Provider>
    </FirstName.Provider>
    </>
    );


};

export default App;
export {FirstName, LastName};