import React, { Component } from 'react';
import playersHash from './data'
import { Button, Header, Label, Segment } from 'semantic-ui-react'

class Gameplay extends Component {

  state = {
    allPlayers: null,
    currPlayer: null,
    currInput: "",
    showAnswer: false,
    completedPlayers: []
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
      if(currPlayer.collegeName !== "" && !currPlayer.collegeName.includes(',') && !currPlayer.collegeName.includes('HS') && !currPlayer.collegeName.includes('Spain') && !currPlayer.collegeName.includes('H.S.') && !this.state.completedPlayers.includes(currPlayer) && !currPlayer.collegeName.includes('Greece')){
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
        <br></br>
        {!!this.state.currPlayer &&
          <Segment raised textAlign='center'>
            <Header as='h4'>What college did {this.state.currPlayer.firstName} {this.state.currPlayer.lastName} go to?</Header>
            {!this.state.showAnswer
            ?
            <Button onClick={() => this.setState({ showAnswer: true })}>View Answer</Button>
            :
            <React.Fragment>
              <Button onClick={() => {this.setState({ showAnswer: false, completedPlayers: [...this.state.completedPlayers, this.state.currPlayer] }); this.getRandomPlayer()}}>Next</Button>
              <br></br><br></br>
              <Label color='blue'><Header as='h4' color='yellow'>{this.state.currPlayer.collegeName}</Header></Label>
            </React.Fragment>
            }
        </Segment>
        }

        <Header as='h3'>Previous Players</Header>
          <table className="ui large celled striped padded table">
                <tbody>
                  <tr className="center aligned">
                    <th>
                      <h3 className="ui left aligned header">
                        Player
                      </h3>
                    </th>
                    <th>
                      <h3 className="ui center aligned header">
                        College
                      </h3>
                    </th>
                  </tr>

                  {this.state.completedPlayers.reverse().map((player, idx) => {
                    return <tr key={idx} className="center aligned">
                            <th>
                              <h5 className="ui left aligned header">
                                {player.firstName} {player.lastName}
                              </h5>
                            </th>
                            <th>
                              <h5 className="ui center aligned header">
                                {player.collegeName}
                              </h5>
                            </th>
                          </tr>
                  })}

                </tbody>
              </table>

      </React.Fragment>
    )
  }

}

export default Gameplay
