import React from "react";
import BotCard from "../components/BotCard";

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



  renderBots = () => {
    return this.props.bots.map(botObj => {
      return (
        <BotCard bot = {botObj} handleClick = {this.props.handleClick} />
      )
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
