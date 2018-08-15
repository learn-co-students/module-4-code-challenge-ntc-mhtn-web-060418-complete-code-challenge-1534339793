import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    yourBots: []
  };

  findBotFromAll = id => {
    return this.state.allBots.find(bot => bot.id === id);
  };

  addBotToArmy = id => {
    this.setState(
      { yourBots: [...this.state.yourBots, this.findBotFromAll(id)] },
      () => console.log(this.state.yourBots)
    );
  };

  findBotFromArmy = id => {
    return this.state.yourBots.find(bot => bot.id === id);
  };

  removeBotFromArmy = botId => {
    const newArmy = this.state.yourBots.filter(
      bot => bot !== this.findBotFromArmy(botId)
    );
    this.setState({ yourBots: newArmy });
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(data => this.setState({ allBots: data }));
  }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.yourBots}
          removeBot={this.removeBotFromArmy}
        />
        <BotCollection bots={this.state.allBots} addBot={this.addBotToArmy} />
      </div>
    );
  }
}

export default BotsPage;
