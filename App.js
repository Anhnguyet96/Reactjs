import React, { useState } from 'react';
import './App.css';
import './Person/Person'
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Max", age : "28"},
      {name: "Merry", age : "29"},
      {name: "May", age : "26"}
    ]

  });
  const [otherState, setOtherState] = useState('Some other value');
  console.log(personsState, otherState);
  const switchNameHandler = () => {
    //console.log("was clicked");
    setPersonsState({
      persons: [
        {name: "Maximum", age : "29"},
        {name: "Merry", age : "29"},
        {name: "Violet", age : "26"}
  
      ]

    } )
  }
 
    return (
      <div className="App">
        <h1>Hi</h1>
        <button onClick ={switchNameHandler}>Switch name</button>
        <Person 
          name ={personsState.persons[0].name} 
          age = {personsState.persons[0].age}
        />
        <Person  name ={personsState.persons[1].name} age = {personsState.persons[1].age}>
          My Hobbies: Racing 
        </Person>
        <Person  
          name ={personsState.persons[2].name} 
          age ={personsState.persons[2].age} 
        />
      </div>
    );
  
}

export default App;



