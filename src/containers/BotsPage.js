import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botSpecs: null,
    botArmy: []
  }

  loadBotSpecs = (id) => {
    this.setState({
      botSpecs: this.state.bots.find(bot => bot.id === id)
    })
  }

  clearBotSpecs = () => {
    this.setState({
      botSpecs: null
    })
  }

  collectionSpecs = () => {
    if (this.state.botSpecs){
      return (
        <BotSpecs bot={this.state.botSpecs} addBotToArmy={this.addBotToArmy} clearBotSpecs={this.clearBotSpecs} />
      )
    } else {
      return <BotCollection bots={this.state.bots} loadBotSpecs={this.loadBotSpecs} />
    }
  }

  addBotToArmy = (id) => {
    if (!this.state.botArmy.some(bot => bot.id === id)){
      const newBotArmy = [...this.state.botArmy]
      newBotArmy.push(this.state.bots.find(bot => bot.id === id))
      this.setState({
        botArmy: newBotArmy
      }, this.clearBotSpecs)
    }
  }

  removeFromBotArmy = (id) => {
    const newBotArmy = this.state.botArmy.filter(bot => bot.id !== id)
    this.setState({
      botArmy: newBotArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeFromBotArmy={this.removeFromBotArmy} />
        {this.collectionSpecs()}
      </div>
    );
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res=>res.json())
    .then(botArray=>this.setState({
      bots: botArray
    }))
  }

}

export default BotsPage;
