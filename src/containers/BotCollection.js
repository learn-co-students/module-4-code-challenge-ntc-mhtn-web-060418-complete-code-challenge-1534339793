import React from "react";
import BotCard from "../components/BotCard";
import ClassFilter from '../components/ClassFilter'

class BotCollection extends React.Component {
  //your code here

  // state = {
  //   filter: ''
  // }

  renderBotCards(){
    return this.props.bots.map(bot => {
      return (
        <BotCard key={bot.id} bot={bot} clickCard={this.props.loadBotSpecs} />
      )
    })
  }

  setFilter = () => {

  }

  render(){
  	return (
  	  <div className="ui four column grid">
        {/* <ClassFilter setFilter={this.setFilter} /> */}
    		<div className="row">
    		  {this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
