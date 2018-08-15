import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'collection',
      specBot: ''
    }
  }

  renderBots = () => {
    return this.props.bots.map((bot) => {
      return <BotCard
      key={bot.id}
      bot={bot} showSpec={this.showSpec}/>
    })
  }

  showSpec = (bot) => {
    this.setState({
      view: 'spec',
      specBot: bot
    })
  }

  goBack = () => {
    this.setState({
      view: 'collection',
      specBot: ''
    })
  }

  addBotToBotArmy = (bot) => {
    this.props.addBotToBotArmy(bot)
    this.setState({
      view: 'collection',
      specBot: '',
    })
  }

  renderView = () => {
    if (this.state.view === "collection") {
      return this.renderBots()
    } else if (this.state.view === "spec") {
      return <BotSpecs
      bot= {this.state.specBot}
      addBotToBotArmy={this.addBotToBotArmy}
      goBack={this.goBack}/>
    }

  }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderView()}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
