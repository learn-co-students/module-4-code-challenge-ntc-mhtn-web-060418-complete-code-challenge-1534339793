import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBotCards(){
    return this.props.bots.map(bot => {
      return (
        <BotCard key={bot.id} bot={bot} clickCard={this.props.loadBotSpecs} />
      )
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
