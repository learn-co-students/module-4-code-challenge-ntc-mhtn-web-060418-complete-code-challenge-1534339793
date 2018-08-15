import React from "react";
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

export default class CollectionSpecContainer extends React.Component {

  state = {
    botSpecs: null,
  }

  renderCollectionOrSpecs = () => {
    if (this.state.botSpecs){
      return (
        <BotSpecs bot={this.state.botSpecs} addBotToArmy={this.props.addBotToArmy} clearBotSpecs={this.clearBotSpecs} />
      )
    } else {
      return <BotCollection bots={this.props.bots} loadBotSpecs={this.loadBotSpecs} />
    }
  }

  loadBotSpecs = (id) => {
    this.setState({
      botSpecs: this.props.bots.find(bot => bot.id === id)
    })
  }

  clearBotSpecs = () => {
    this.setState({
      botSpecs: null
    })
  }

  render(){
    return (
      <div>
        {this.renderCollectionOrSpecs()}
      </div>
    )
  }
}
