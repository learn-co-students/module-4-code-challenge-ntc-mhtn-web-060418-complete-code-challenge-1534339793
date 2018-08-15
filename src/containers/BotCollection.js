import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  mapAllBots = (botArray) => {
    return botArray.map(botObj => <BotCard handleClick={this.props.handleClick} key={botObj.id} bot={botObj} /> )
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.mapAllBots(this.props.bots)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
