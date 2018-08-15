import React from "react";
import YourBotArmy from './YourBotArmy'
import CollectionSpecContainer from './CollectionSpecContainer'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }

  addBotToArmy = (id) => {
    if (!this.state.botArmy.some(bot => bot.id === id)){
      const newBotArmy = [...this.state.botArmy]
      newBotArmy.push(this.state.bots.find(bot => bot.id === id))
      this.setState({
        botArmy: newBotArmy
      })
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
        <CollectionSpecContainer bots={this.state.bots} addBotToArmy={this.addBotToArmy} />
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
