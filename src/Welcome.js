import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import Gameplay from './Gameplay'

class Welcome extends Component {

  state = {
    play: false
  }

  render(){
    return(
      !!this.state.play
      ?
      < Gameplay />
      :
      <Button icon onClick={() => this.setState({ play: true })}>
        BEGIN!
        <Icon name='basketball ball' />
      </Button>
    )
  }

}

export default Welcome
