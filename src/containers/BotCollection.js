import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"
class BotCollection extends React.Component {
  //your code here

  // <BotCollection bots = {this.state.bots} handleClick = {this.handleClick} />
  // state = {
  //     id: 0,
  //     name: '',
  //     health: 0,
  //     damage: 0,
  //     armor: 0,
  //     bot_class: '',
  //     catchphrase: ''
  //   }
  state = {
    flipped : false,
  }

  handleFlip = () => {
    if (this.state.flipped) {
      return this.renderDetails()
    } else {
      return this.renderBots()
    }
  }

  renderDetails = (event) => {
    return this.props.bots.map(botObj => {
      return (
        <BotSpecs bot = {botObj} flipped = {this.state.flipped}/>
      )
    })
  }

  renderBots = () => {
    return this.props.bots.map(botObj => {
      return (
        <BotCard bot = {botObj} renderDetails = {this.renderDetails} flipped = {this.state.flipped}/>
      )
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.state.flipped ? this.renderDetails() : this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
