import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'


class Search extends Component {

  state = {
    currInput: ""
  }

  handleChange(event){
    this.setState({
      currInput: event.target.value
    }, () => this.state.currInput)
  }

  render(){
    return(
      <form onSubmit={(event) => {event.preventDefault(); this.props.setCurrPlayer(this.state.currInput); this.setState({ currInput: "" })}} className="ui form">
        <div className="field">
          <label>Find a Player</label>
          <Input
            style={{ width: "200px" }}
            placeholder="Search here"
            type="text"
            value={this.state.currInput}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
          <input  type='submit'
                  value="Search"
                  className="ui submit button" />
      </form>
    )
  }

}

export default Search
