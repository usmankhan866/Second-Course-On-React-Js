import React, {useEffect, useState}  from "react";

/* Using useEffect Hooks in react Js: It is used when u want to display something on screen after
   the react app will rendered (and then display something ) */


const App =  ()=> {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  
  // useEffect(()=>{
  //   alert("I am Clicked::");
  // });

  /* Note i want that on click of button 1 alert message occure not on the click of button 2
     for that we will pass the the array containg the current value of button 1 "[num]"
   */

     useEffect(()=>{

      document.title = `You clicked me ${num} times`;
     });

    //  useEffect(()=>{
    //   alert("I am Clicked::");
    //   console.log("Only on button 1 is clicked this console message will appear");
    // }, [num]);

  return (
    <>
    
    <button onClick= {()=>{
      setNum(num+1);
    }}> Click me {num} </button>
    <br></br>
    
    <button onClick= {()=>{
      setNum2(num2+1);
    }}> Click me {num2} </button>
    </>
    );
}

export default App;