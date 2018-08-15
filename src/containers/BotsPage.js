import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import Filter from "./Filter"

class BotsPage extends React.Component {

  state = {
    bots: [],
    enlistedBots: [],
    clicked: false,
    clickedBot: '',
    filteredBots: []
  }

  filterBots = (searchTerm) => {
    const listForFilter = [...this.state.bots]
    const filteredBots = listForFilter.filter(botObj => botObj.name.toLowerCase().includes(searchTerm.toLowerCase()))
    this.setState({
      filteredBots: filteredBots
    })
  }

  handleRemove = (botId) => {
    const currentEnlistedBots = [...this.state.enlistedBots]
    const listWithoutClickedBot = currentEnlistedBots.filter(botObj => botObj.id !== botId)
    this.setState({
      enlistedBots: listWithoutClickedBot
    })
  }

  botSpecsToggle = () => {
    let show = <BotCollection handleClick={this.handleClick} bots={this.state.filteredBots} />
    if (this.state.clicked){
      show = <BotSpecs enlistBot={this.enlistBot} showAllBots={this.showAllBots} bot={this.state.clickedBot} />
    }
    return show
  }

  showAllBots = () => {
    this.setState({
      clicked: false,
      clickedBot: ''
    })
  }

  enlistBot = () => {
    const clickedBot = this.state.clickedBot
    const currentEnlistedBots = [...this.state.enlistedBots]

    if (!currentEnlistedBots.includes(clickedBot)){
      currentEnlistedBots.push(clickedBot);
      this.setState({
        enlistedBots: currentEnlistedBots,
      })
    }
  }

  handleClick = (botId) =>{
    const foundBot = this.state.bots.find(botObj => botObj.id === botId)
    this.setState({
      clicked: true,
      clickedBot: foundBot
    })
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(resp => resp.json()).then(resp => this.setState({
      bots: resp,
      filteredBots: resp
    }))
  }

  render() {
    return (
      <div>
        <YourBotArmy handleRemove={this.handleRemove} enlistedBots={this.state.enlistedBots} />
        <Filter filterBots={this.filterBots}/>
        {this.botSpecsToggle()}
      </div>
    );
  }

}

export default BotsPage;
