import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [],
    enlistedBots: []
  }

  handleRemove = (botId) => {
    const currentEnlistedBots = [...this.state.enlistedBots]
    const listWithoutClickedBot = currentEnlistedBots.filter(botObj => botObj.id !== botId)
    this.setState({
      enlistedBots: listWithoutClickedBot
    })
  }

  handleClick = (botId) => {
    const currentEnlistedBots = [...this.state.enlistedBots]
    const clickedBot = this.state.bots.find(botObj => botObj.id === botId)
    if (!currentEnlistedBots.includes(clickedBot)){
      currentEnlistedBots.push(clickedBot);
      this.setState({
        enlistedBots: currentEnlistedBots
      })
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json()).then(resp => this.setState({
      bots: resp
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy handleRemove={this.handleRemove} enlistedBots={this.state.enlistedBots} />
        <BotCollection handleClick={this.handleClick} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
