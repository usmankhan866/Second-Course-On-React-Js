import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react/cjs/react.development";


const App = ()=>{

  // Here we passed an object (fName, lName) in the useState() method.. 
  const [fullName, setFullName] = useState({

        fName: "",
        lName: "",
        email: "",
        phone: "",
        qual: "",
  });

  
  const inputEvent = (event)=>{

    // Here in the value and name we have accessed the value and name attributes of the input elements
    // const value = event.target.value;
    // const name  = event.target.name;

    // Array destructuring
    const {name, value} = event.target;
    
   
    /* Note:: In the setFullName() method we can access the previous value of the input fields
       Here we passed an object "preVal" to access the previous value of input fields
    */  
    setFullName((preVal)=>{

         return{
        /*preVal object containing the property of fName, lName, email, phone, etc if the name of preVal match 
        to the [name] assign that value to that input field value */
         ...preVal,
         [name] : value,
         };
    
      // if(name === "fName"){
      //   return{ 
      //   fName: value,
      //  lName: preVal.lName,
      //  email: preVal.email,
      //  phone:preVal.phone,
      //  
      // };
      // }  // the same above explanation for if the name is "lName"..  
      // else if(name === "lName"){
      //   return{ 
      //     fName: preVal.fName,
      //     lName: value,
      //     email: preVal.email,
      //     phone:preVal.phone,
      //     
      //   };
      // }

      // else if(name === "email"){
      //   return{ 
      //     fName: preVal.fName,
      //     lName: preVal.lName,
      //     email:value,
      //     phone:preVal.phone,
      //    
      //   };
      // }

      // else if(name === "phone"){
      //   return{ 
      //     fName: preVal.fName,
      //     lName: preVal.lName,
      //     email: preVal.email,
      //      phone: value,
      //      
      //   };
      // }
    
     });
  }

  const onSubmits = (event)=>{
    // To prevent the default behaviour of form
    event.preventDefault();
    alert("Form is submitted"); 
  }


  return(
  <div>
    <div className="main_div">
     <form onSubmit={onSubmits}> 

         <h1>Hello {fullName.fName} {fullName.lName}</h1>
         <p> {fullName.email} </p>
         <p> {fullName.phone} </p>
         <p> {fullName.qual}  </p>

         <input type="text" placeholder="Enter your First name" 
         onChange={inputEvent}
         name="fName"
         value= {fullName.fName}
         />

         <br />
         <input type="text" placeholder="Enter your Last Name" 
         onChange={inputEvent}
         name="lName"
         value= {fullName.lName}
         />
         <br />

         <input type="email" placeholder="Enter your email" 
         onChange={inputEvent}
         name="email"
         value= {fullName.email}
         />
         <br />

         <input type="number" placeholder="Enter your Phone number" 
         onChange={inputEvent}
         name="phone"
         value= {fullName.phone}
         />
         <br/>

         <input type="text" placeholder="Enter your Qualification" 
         onChange={inputEvent}
         name="qual"
         value= {fullName.qual}
         />
         <br/>
         
         <button>Submit</button>
     </form>

    </div>
  </div>
  );

}

export default App;