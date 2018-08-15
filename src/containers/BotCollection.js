import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  state = {
    selectedBot: null
  };

  findBot = botId => {
    return this.props.bots.find(bot => bot.id === botId);
  };

  selectBot = botId => {
    this.setState({ selectedBot: this.findBot(botId) });
  };

  mapBots = () =>
    this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} onClick={this.selectBot} />
    ));

  resetState = () => this.setState({ selectedBot: null });

  addBot = botId => {
    this.resetState();
    this.props.addBot(botId);
  };

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.state.selectedBot ? (
            <BotSpecs
              bot={this.state.selectedBot}
              addBot={this.addBot}
              reset={this.resetState}
            />
          ) : (
            this.mapBots()
          )}
        </div>
      </div>
    );
  }
}
export default BotCollection;
