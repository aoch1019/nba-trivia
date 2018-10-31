import React, { Component } from 'react';
import playersHash from './data'
import { Button, Header, Label, Segment } from 'semantic-ui-react'
import Search from './Search'

class Gameplay extends Component {

  constructor(props){
    super(props)

    this.state = {
      allPlayers: null,
      currPlayer: null,
      showAnswer: false,
      completedPlayers: []
    }

    this.setCurrPlayer = this.setCurrPlayer.bind(this)
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

  setCurrPlayer(currInput){
    let playerObj = this.state.allPlayers.find(player => `${player.firstName} ${player.lastName}`.toLowerCase() === currInput.toLowerCase())
    if(!!playerObj){
      this.setState({ currPlayer: playerObj })
    }
    else{
      alert("Player not found")
    }
  }

  render(){
    return(
      <React.Fragment>
        <br></br>
        < Search setCurrPlayer={this.setCurrPlayer}/>
        <br></br>
        {!!this.state.currPlayer &&
          <Segment raised textAlign='center'>
            <Header as='h4'>What college did {this.state.currPlayer.firstName} {this.state.currPlayer.lastName} go to?</Header>
            {!this.state.showAnswer
            ?
            <Button onClick={() => this.setState({ showAnswer: true })}>View Answer</Button>
            :
            <React.Fragment>
              <Button onClick={() => {this.setState({ showAnswer: false, completedPlayers: [this.state.currPlayer, ...this.state.completedPlayers] }); this.getRandomPlayer()}}>Next</Button>
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

                  {this.state.completedPlayers.map((player, idx) => {
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
