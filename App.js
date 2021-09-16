import React, {useState} from "react";

const App = ()=>{
/* Here we have used the Hooks to change the states of the user enter value in the first input field.The val of
 "name" object of useState method is equal to the val of the user enter in the input field simultanously. And on 
 clicking the submit button this name object value is passed to state "firstName" because we have passed the "name" 
 value to the "setFirstName(name)" method of useState method, so the current value of "firstName" is equal to value of 
 "name"..
*/

// Hooks for changing the state of first input field
const [name, setName] = useState();
const [firstName, setFirstName] = useState();

// Hooks for changing the state of second input field
const [endName, setEndName] = useState();
const [lastName, setLastName] = useState();

/* To get the value of input field. "onChange" method pass an event object (it can access many mrthods) 
to inputEvent function to get the value of input fields
*/
const inputEvent = (event)=>{

  let eventVal = event.target.value;
  setName(eventVal);
};

/* To get the value of input field. "onChange" method pass an event object (it can access many mrthods) 
to inputEventTwo function to get the value of input fields
*/
const inputEventTwo = (event)=>{

  let eventVal2 = event.target.value;
  setEndName(eventVal2);
};

/* when we click the on the submit the input fields values will be displayed in the h1 tags after Hello
   it is because of using the Hooks which change the state of firstName and lastName.
   */
const onSubmit = ()=>{

  setFirstName(name);
  setLastName(endName);
}

  return(
  <div>

    <h1>Hello {firstName} {lastName}</h1>
    {/* if we enter the value attribute in the input field so then whatever we enter in the input field will
        not be appear because its controlled by react (mean controlled element).
        To appear what we enter in the input field we have two method 1: use "defaultValue"(not usabale).
        2: "onChange" method and pass a method/function to it (Always use this method in the input field)*/}
    <input type='text' placeholder= 'Enter Your Name'
    onChange= {inputEvent}
    /* To display the input value in the h1 tag we must write the value attribute because without we can'nt display the 
       value of input field in the h1 tag */ 
    value= {name} />
    <br/>

    <input type='text' placeholder= 'Enter Your Password'
    onChange= {inputEventTwo} 
    value= {endName} />
    <br/>
    <button onClick={onSubmit}>Submit</button>
  </div>
  );
}


export default App;