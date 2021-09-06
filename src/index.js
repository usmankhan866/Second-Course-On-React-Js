import React from 'react';
import ReactDOM from 'react-dom';
// Now i import the new component Heading
import App from './App'
import './App.css'


ReactDOM.render(

  // Here i mentioned how to write in the DOM, but not mentioned where to write in the DOM.
  /* Now this Heading JSX element is our customized element created through component */  
  
  <App />,
  // Now i mentioned where to write in the DOM
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
