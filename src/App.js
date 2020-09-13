import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state={
    persons: [
      {name:'siva',age:24},
      {name:'raju',age:22},
      {name:'salman',age:20}
    ],
    otherstate:'otherValue'
  }

  switchNameHandler=(newName)=>{
    this.setState({
      persons: [
        {name:newName,age:24},
        {name:'naga Raju',age:24},
        {name:'salman',age:21}
      ]
    })
  }

  nameChangedHandler=(event)=>{
    this.setState({
      persons: [
        {name:"Siva",age:24},
        {name:event.target.value,age:24},
        {name:'salman',age:21}
      ]
    })
  }

 render() {
   const style={
     backgroundColor:"white",
     border:"1px solid blue",
     padding:"10px auto",
     color:"black",
     font:"inherit",
     width:"100px"
   }
   return (
    <div className="App">
      <h1>Welcome to React</h1>
      <button 
        style={style}
        onClick={this.switchNameHandler.bind(this,'Siva Balusu')}>
        switchName</button>
      <Person name={this.state.persons[0].name} 
         age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Siva!')}
          change={this.nameChangedHandler}>How are you doing</Person>
          
      <Person name={this.state.persons[2].name} 
         age={this.state.persons[2].age}/>
    </div>
  );
  //Internal working of above code
  //return React.createElement("div",{className:"App"},React.createElement("h1",null,"Welcome to React"));   
}
}

export default App;
