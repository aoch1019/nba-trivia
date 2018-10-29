import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <header>
            <img src='https://i0.wp.com/meebily.com/wp-content/uploads/2018/07/NBA-Trivia-questions-answers-quiz-game.jpeg?fit=600%2C400&ssl=1' style={{width: '180px', height: '150px'}} className="App-logo" alt="logo" />
            <br></br><br></br>
            <p>
              Welcome to NBA Player Trivia -- College Edition
            </p>
          </header>
        </div>
        < Welcome />
      </React.Fragment>
    )
  }
}

export default App;
