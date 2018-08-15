import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    usersBots: [],
    clickedBot: ''
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json()).then(data => this.setState({
      bots: data
    }))
  }

  handleClick = (botId) => {
    let bot = this.state.bots.find(bot => bot.id === botId)
    if(!this.state.usersBots.includes(bot)) {
      this.setState({
        clickedBot: bot
      })
    }
  }

  goBackClick = () => {
    this.setState({
      clickedBot: ''
    })
  }

  enlistClick = (botId) => {
    let bot = this.state.bots.find(bot => bot.id === botId)
    this.setState({
      usersBots: [...this.state.usersBots, bot],
      clickedBot: ''
    })

  }

  showView(){
    if (this.state.clickedBot === '') {
      return <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
    } else {
      return <BotSpecs bot={this.state.clickedBot} enlistClick={this.enlistClick} goBackClick={this.goBackClick} /> 
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy usersBots={this.state.usersBots} />
        {this.showView()}
      </div>
    );
  }

}

export default BotsPage;
