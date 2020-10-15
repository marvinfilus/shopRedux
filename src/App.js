import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user : {}
    }
  }
  render(){
    console.log('hello')
    return (
      <div className="App">
        <h1> Instagram </h1>
        <header className="App-header">
          <div className="div">
            <p> Log In </p>
            <input type="text" />
            <p> Password</p>
            <input type="password" />
            <br/>
            <button> Submit</button>
          </div>
          <div className="div">
            <p> Sign Up </p>
            <input type="text" />
            <p> Password</p>
            <input type="password" />
            <br/>
            <button> Submit</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
