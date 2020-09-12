import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Person/>
    </div>
  );
  //Internal working of above code
  //return React.createElement("div",{className:"App"},React.createElement("h1",null,"Welcome to React"));   
}

export default App;
