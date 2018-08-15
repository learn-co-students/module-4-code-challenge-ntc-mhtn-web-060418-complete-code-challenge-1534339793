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
      <div className="search-flex">
        <h3>Search for a Bot by name</h3>
        <input value={this.state.searchTerm} onChange={this.handleSearch} />
      </div>
    )
  }
}
