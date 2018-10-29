import React, { Component } from 'react';
import playersHash from './data'
import { Input } from 'semantic-ui-react'

class Gameplay extends Component {

  state = {
    allPlayers: null,
    currPlayer: null,
    currInput: ""
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
      if(currPlayer.collegeName !== "" && !currPlayer.collegeName.includes(',') && !currPlayer.collegeName.includes('HS')){
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
              <form onSubmit={() => this.formSubmitted()}>
              <Input focus placeholder='Answer...'
                     value={this.state.currInput}
                     onChange={(event) => this.handleChange(event)}
                />
              <Input  type='submit'
                      value="Submit"
                />
            </form>
        </React.Fragment>
        }

      </React.Fragment>
    )
  }

}

export default Gameplay
