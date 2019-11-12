import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
  persons: [
    {name:'YYYY', age:32},
    {name:'GGGG', age:35},
    {name:'HHHH', age:37}
  ],
  showPerson: false
}
// if you notice the moment this fun called we change name of YYYY and age of HHHH
switchNameHandler = () => {
 //console.log('button Clicked');
 //Cannot Mutate value. DO NOT use this --> this.state.persons[].name = 'HUHU';
 this.setState({
  persons: [
    {name:'BBBB', age:32},
    {name:'GGGG', age:35},
    {name:'HHHH', age:38}
  ]
}
 )
}

// Building version 1 of changeNameHandler this passing value to this function.
changeNameHandler = (event) => {
  console.log('button Clicked');
  //Cannot Mutate value. DO NOT use this --> this.state.persons[].name = 'HUHU';
  // state gets merged and will not update showPerson flag value.
  this.setState({
   persons: [
     {name: 'BBBB', age:32},
     {name:  event.target.value, age:35},
     {name:'HHHH', age:37}
   ]
     
 }
  )
 }

 // Building version 1 of changeNameHandler this passing value to this function.
showPersons = () => {
  console.log('Show Person button Clicked');
  //Cannot Mutate value. DO NOT use this --> this.state.persons[].name = 'HUHU';
  const doShowPerson = this.state.showPerson;
  console.log('Show Person button Clicked'+ doShowPerson);
  this.setState({showPerson: !doShowPerson})
 }

  render() {

    const buttonStyle = {
      backgroundColor: 'orange',
      font: 'inherit',
      marginBottom: '20px'

    };
{/* single return statement of the class component */}
  return (
      <div className="App">
      
       <h1>React Guide - Conditional execution# 1</h1>
  
       <button  style={buttonStyle}  onClick={this.switchNameHandler}>Switch Name</button>
       <button  style={buttonStyle}  onClick={this.showPersons}>Show Person</button>
       {/*  Evaluting state of Show Person. If True render Div, else null */} 
        {this.state.showPerson === true ?
              <div>
              <Person name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
              
              <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                change={this.changeNameHandler}>Cricketer</Person>

              <Person name={this.state.persons[2].name} 
              age={this.state.persons[2].age}>retired Cricketer</Person>
              </div> : null}
      </div>
    );
  }
}

export default App;
