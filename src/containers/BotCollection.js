import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  const mapBots = props.bots.map(bot => (
    <BotCard bot={bot} onClick={props.addBot} />
  ));

  return (
    <div className="ui four column grid">
      <div className="row">{mapBots}</div>
    </div>
  );
};

export default BotCollection;
