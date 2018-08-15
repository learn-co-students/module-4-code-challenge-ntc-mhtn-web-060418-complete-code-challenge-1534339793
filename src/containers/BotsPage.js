import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    usersBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json()).then(data => this.setState({
      bots: data
    }))
  }

  handleClick = (botId) => {
    // console.log("clicked")
    let bot = this.state.bots.find(bot => bot.id === botId)
    // console.log(bot)

    if(!this.state.usersBots.includes(bot)) {
      this.setState({
        usersBots: [...this.state.usersBots, bot]
      })
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy usersBots={this.state.usersBots} />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
