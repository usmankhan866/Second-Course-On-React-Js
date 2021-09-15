import React, {useState} from "react";


// const App = ()=>{

//   const oldCol = 'mediumpurple';
//   const [bgCol, setCol] = useState(oldCol);

//   const [name, setName] = useState('click me');

//   const bgChange = ()=>{
//    let newCol = 'yellow';
//    setCol(newCol);
//    setName('ooh!! :');
//     // console.log('clicked');

//   }

//   const oldBg = ()=>{

//     setCol(oldCol);
//     setName("wawoo!!  ");
//   }

//   return(
//     <>
//        <div style={{ backgroundColor: bgCol }}>
//             <button onClick= {bgChange} onDoubleClick={oldBg}> {name} </button>
//        </div>

//     </>
//   );

// };

const App = ()=>{

  const oldInfo = 'Hello World I am Mohammad Usman';
  const [info, setInfo] = useState(oldInfo);
  
  let oldBg = "mediumpurple"; 
  const [bg, setBg] = useState(oldBg);

  let border = '0px';
  const [chngBorder, setBorder] = useState(border);

  const myInfo = ()=>{

    setInfo('And i am the bechlor student of Computer Science');
    setBg('maroon');
    setBorder('3px solid');
  }

  const myName = ()=>{

    setInfo(oldInfo);
    setBg(oldBg);
    setBorder(border);
  }

  return(
    <>

       <div style={{ backgroundColor: bg, border: chngBorder }}>{info} <br />
         <button onMouseMove= {myInfo} onMouseLeave= {myName}> click me </button>
       </div>
    </>
  );
}

export default App;