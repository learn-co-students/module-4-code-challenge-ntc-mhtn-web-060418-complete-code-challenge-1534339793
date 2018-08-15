import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...


  renderMyBots = (props) => {
    return this.props.chosenBots.map(bot => {
      return (
          <div className="ui column">
            <div
              className="ui card"
              key={bot.id}
              onClick={(event) => {this.props.handleDelete(event,bot.id)}}
            >
              <div className="image">
                <img alt="oh no!" src={bot.avatar_url} />
              </div>
              <div className="content">
                <div className="header">
                  {bot.name}
                </div>

                <div className="meta text-wrap">
                  <small>{bot.catchphrase}</small>
                </div>
              </div>
              <div className="extra content">
                <span>
                  <i className="icon heartbeat" />
                  {bot.health}
                </span>

                <span>
                  <i className="icon lightning" />
                  {bot.damage}
                </span>
                <span>
                  <i className="icon shield" />
                  {bot.armor}
                </span>
              </div>
            </div>
          </div>
      )
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderMyBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
