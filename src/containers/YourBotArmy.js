import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  mapAllBots = (botArray) => {
    return botArray.map(botObj => <BotCard handleClick={this.props.handleRemove} key={botObj.id} bot={botObj} /> )
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.mapAllBots(this.props.enlistedBots)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
