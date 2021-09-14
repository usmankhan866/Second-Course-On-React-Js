// import React, { useState } from 'react';
import React from "react";
import ReactDOM from "react-dom";

/*
You can convert a function component like Clock to a class in five steps:

Create an ES6 class, with the same name, that extends React.Component.
Add a single empty method to it called render().
Move the body of the function into the render() method.
Replace props with this.props in the render() body.
Delete the remaining empty function declaration.
*/

class Clock extends React.Component{

  constructor(props){
    super(props);

    this.state = {date: new Date()};
  }

  render(){

    return(
      <div>

        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()} </h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />, document.getElementById('root')
);

export default Clock;
