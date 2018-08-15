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
      specBot: '',
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
    const updatedBots = this.state.bots


    if (updatedBotsArmy.includes(newBot)) {
      const index = updatedBotsArmy.indexOf(newBot)
      updatedBots.push(newBot)
      updatedBotsArmy.splice(index, 1)
    } else {
      const index = updatedBots.indexOf(newBot)
      updatedBotsArmy.push(newBot)
      updatedBots.splice(index, 1)
    }

    this.setState({
      bots: updatedBots,
      botsArmy: updatedBotsArmy,
      view: 'collection',
      specBot: '',
    })
  }

  showSpec = (bot) => {
    this.setState({
      view: 'spec',
      specBot: bot,
    })
  }

  goBack = () => {
    this.setState({
      view: 'collection',
      specBot: ''
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy
        bots={this.state.botsArmy} showSpec={this.showSpec}
        />
        <BotCollection
        {...this.state}
        showSpec={this.showSpec}
        goBack={this.goBack}
        addBotToBotArmy={this.addBotToBotArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
