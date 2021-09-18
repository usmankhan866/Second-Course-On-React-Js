import React, { useState } from "react";
import ToDoList from "./ToDoList";


const App = ()=>{

  const [inpList, setInpList] = useState("");
  const [items, setItems] = useState([]);

  const listEvent = (e)=> {
    
    // console.log(e.target.value);
    // console.log(e.target.name);
    const newVal = e.target.value;
   console.log(newVal);

   setInpList(newVal);

  }

  const listOfItem = ()=>{

    setItems((oldItem)=>{
      return [...oldItem, inpList];
    });

    setInpList("");
  }

  // setInpList("");

  

  return(
  <div>
    <div className="main_div">
     
     <h1>ToDo List</h1>
     <br />
     <input type="text" 
            placeholder="Enter Your Items" 
            value={inpList}
            onChange={listEvent}
       />
     <button onClick={listOfItem}> + </button>

     <ol>
       {items.map((itemsVal)=>{
        return <ToDoList text={itemsVal} /> ;
       })
       }
     </ol>

    </div>
  </div>
  );

}

export default App;