import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  mapBots = () =>
    this.props.bots.map(bot => (
      <BotCard bot={bot} onClick={this.props.removeBot} />
    ));

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">{this.mapBots()}</div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
