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
  };
 render() {
   return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>How are you doing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  //Internal working of above code
  //return React.createElement("div",{className:"App"},React.createElement("h1",null,"Welcome to React"));   
}
}

export default App;
