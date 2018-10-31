import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import { Header, Container, Image } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <div>
          <br></br>
          <header>
            <Image src='https://i0.wp.com/meebily.com/wp-content/uploads/2018/07/NBA-Trivia-questions-answers-quiz-game.jpeg?fit=600%2C400&ssl=1' circular centered style={{width: '180px', height: '150px'}} className="App-logo" alt="logo" />
            <br></br><br></br>
            <Header as='h2'>
              Welcome to NBA Player Trivia -- College Edition
            </Header>
          </header>
        </div>
        <br></br>
        < Welcome />
    </Container>
    )
  }
}

export default App;
