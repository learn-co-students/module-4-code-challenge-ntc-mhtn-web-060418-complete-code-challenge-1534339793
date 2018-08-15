import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderBots = () => {
    return this.props.bots.map((bot) => {
      return <BotCard key={bot.id} bot={bot} showSpec={this.showSpec}/>
    })
  }

  showSpec = (bot) => {

  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
