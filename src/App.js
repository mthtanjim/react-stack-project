import React, { Component } from "react";
import classes from './app.module.css';
import Input from './component/input';
import UncontrolFrom from './component/uncontrolFrom';
import SpiltForm from './component/spiltForm'


class App extends Component {
    
  render() {   
  
    return (  
    <div className={classes.app}>    
      <h1 className={classes.heading} > This is app module</h1>
      <br/>
      <SpiltForm/>
      
      <br/><br/>
      
    </div>    
    );
  } 
}

export default App;



