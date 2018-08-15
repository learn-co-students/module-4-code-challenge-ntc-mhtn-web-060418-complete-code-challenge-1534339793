import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import Sort from "../components/Sort";


class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    botsCopy: [],
    usersBots: [],
    clickedBot: '',
    sortBy: ''
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json()).then(data => this.setState({
      bots: data,
      botsCopy: data
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
      return <BotCollection bots={this.state.botsCopy} handleClick={this.handleClick} />
    } else {
      return <BotSpecs bot={this.state.clickedBot} enlistClick={this.enlistClick} goBackClick={this.goBackClick} /> 
    }
  }

  handleChange = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  handleSort = (event) => {
    event.preventDefault()
    let category = this.state.sortBy
    if (category !== 'all'){
    let newArr = this.state.bots.sort((a, b) => {return a[category] - b[category]})
    this.setState({
      botsCopy: newArr
    }) } else {
      this.setState({
        botsCopy: this.state.bots        
      })
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <Sort handleChange={this.handleChange} handleSort={this.handleSort} />
        <YourBotArmy usersBots={this.state.usersBots} />
        {this.showView()}
      </div>
    );
  }

}

export default BotsPage;
