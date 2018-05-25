import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Wagner", age: 24 },
      { name: "Beto", age: 1 },
      { name: "Jean", age: 27 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('This was clicked indeed!');
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: "Beto", age: 30 },
        { name: "Jean", age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 24 },
        { name: event.target.value, age: 1 },
        { name: "Jean", age: 27 }
      ]
    })
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler('Vanjie')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Wagina')} 
          changed={this.nameChangedHandler}>
          My hobbie: meowing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
