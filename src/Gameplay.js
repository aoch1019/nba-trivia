import React, { Component } from 'react';
import playersHash from './data'

class Gameplay extends Component {

  state = {
    allPlayers: null,
    currPlayer: null,
    currInput: "",
    showAnswer: false
  }

  componentDidMount(){
    this.getAllPlayers()
  }

  async getAllPlayers(){
    this.setState({ allPlayers: playersHash.league.standard }, () => this.getRandomPlayer())
  }

  getRandomPlayer(){
    let player = null
    while(player === null){
      let randomNum = Math.floor(Math.random() * this.state.allPlayers.length)
      let currPlayer = this.state.allPlayers[randomNum]
      if(currPlayer.collegeName !== "" && !currPlayer.collegeName.includes(',') && !currPlayer.collegeName.includes('HS') && currPlayer !== this.state.currPlayer){
        player = currPlayer
      }
    }
    this.setState({ currPlayer: player })
  }

  handleChange(event){
    this.setState({
      currInput: event.target.value
    }, () => this.state.currInput)
  }

  formSubmitted(){
    debugger
  }

  render(){
    return(
      <React.Fragment>
        {!!this.state.currPlayer &&
          <React.Fragment>
            <div>What college did {this.state.currPlayer.firstName} {this.state.currPlayer.lastName} go to?</div>
            {!this.state.showAnswer
            ?
            <button onClick={() => this.setState({ showAnswer: true })}>View Answer</button>
            :
            <React.Fragment>
              <button onClick={() => {this.getRandomPlayer(); this.setState({ showAnswer: false }) }}>Next</button>
              <div>{this.state.currPlayer.collegeName}</div>              
            </React.Fragment>
            }
        </React.Fragment>
        }

      </React.Fragment>
    )
  }

}

export default Gameplay
