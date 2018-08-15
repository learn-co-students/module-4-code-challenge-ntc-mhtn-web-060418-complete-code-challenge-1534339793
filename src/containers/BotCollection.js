import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {

  renderBots = () => {
    return this.props.bots.map((bot) => {
      return <BotCard
      key={bot.id}
      bot={bot} showSpec={this.props.showSpec}/>
    })
  }

  renderView = () => {
    if (this.props.view === "collection") {
      return (
        <div className="ui four column grid">
      		<div className="row">
          {this.renderBots()}
          </div>
        </div>
      )
    } else if (this.props.view === "spec") {
      return <BotSpecs
      bot={this.props.specBot}
      addBotToBotArmy={this.props.addBotToBotArmy}
      goBack={this.props.goBack}
      botsArmy={this.props.botsArmy}
      />
    }

  }



  render(){
  	return (

  	  <React.Fragment>
    		  {this.renderView()}
      </React.Fragment>

  	);
  }

};

export default BotCollection;
