import React, { Component } from 'react';

export default class Filter extends Component {

  state = {
    searchTerm: ''
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => this.props.filterBots(this.state.searchTerm))

  }

  render(){
    return (
      <input value={this.state.searchTerm} onChange={this.handleSearch} />
    )
  }
}
