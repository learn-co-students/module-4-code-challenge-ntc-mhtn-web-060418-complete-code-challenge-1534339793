import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props)
    this.state = {
      bots: [],
      botsArmy: [],
      view: 'collection',
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(res => res.json()).then(json => this.setInitialState(json))
  }

  setInitialState = (botsArray) => {
    this.setState({
      bots: botsArray
    })
  }

  addBotToBotArmy = (newBot) => {
    const updatedBotsArmy = this.state.botsArmy
    updatedBotsArmy.push(newBot)

    const updatedBots = this.state.bots

    const found = updatedBots.find((bot) => {
      return bot.id === newBot.id
    })

    const index = updatedBots.indexOf(found)

    updatedBots.splice(index, 1)

    this.setState({
      bots: updatedBots,
      botsArmy: updatedBotsArmy,
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botsArmy}/>
        <BotCollection bots={this.state.bots} addBotToBotArmy={this.addBotToBotArmy}/>
      </div>
    );
  }

}

export default BotsPage;
