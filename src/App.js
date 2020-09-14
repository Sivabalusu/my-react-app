import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state={
    persons: [
      {id:'asdf',name:'siva',age:24},
      {id:'bfss',name:'raju',age:22},
      {id:'nggg',name:'salman',age:20}
    ],
    otherstate:'otherValue',
    togglePersons:false
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

  nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    })
    const person=this.state.persons[personIndex];
    person.name=event.target.value;
    const persons=[...this.state.persons];
    this.setState({persons:persons
    })
  }

  togglePersonsHandler=()=>{
    const person=this.state.togglePersons;
    this.setState({togglePersons:!person})
  }

  deletePersonsHandler=(personIndex)=>{
    //const persons1=this.state.persons.slice();
    const persons1=[...this.state.persons];
    persons1.splice(personIndex,1);
    this.setState({persons:persons1})
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

   let persons=null;
   if(this.state.togglePersons){
     persons= (
     <div>{
       this.state.persons.map((persons,index)=>{
          return <Person
                  click={()=>this.deletePersonsHandler(index)} 
                  name={persons.name}
                  age={persons.age}
                  key={persons.id}
                  change={(event)=>this.nameChangedHandler(event,persons.id)}/>
       })
      }
      </div>);
   }

   return (
    <div className="App">
      <h1>Welcome to React</h1>
      <button 
        style={style}
        onClick={this.togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
  //Internal working of above code
  //return React.createElement("div",{className:"App"},React.createElement("h1",null,"Welcome to React"));   
}
}

export default App;
