import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {

  //   id: res.id,
  //   name: res.name,
  //   health: res.health,
  //   damage: res.damage,
  //   armor: res.armor,
  //   bot_class: res.bot_class,
  //   catchphrase: res.catchphrase
  //start here with your code for step one
  state = {
    bots: [],
    chosenBots: []
  }
  // filterSongs = () => {
  //   return this.state.songs.filter(song => {return song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())})
  // }
  // filterBots = () => {
  //   return this.state.bots.filter(bot => {
  //     return bot.id
  //   })
  // // }
  // handlePlay = (id) => {
  //   let currentSong = this.state.songs.find(song => song.id === id)
  //   this.setState({
  //     currentSong
  //   })
  // }
  // handleChange = (event) => {
  //   this.setState({
  //     searchTerm: event.target.value
  //   })
  // }

  // filterBots = () => {
  //   return this.state.bots.filter(bot => {return bot.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())})
  // }
  handleDelete = (event, id) => {
    let deleted = this.state.chosenBots.filter(bot => bot.id !== id)
    this.setState({
      chosenBots: deleted,
    })
  }

  handleClick = (event, id) => {
    let selectedBot = this.state.bots.find(bot => bot.id === id)
    this.setState({
      chosenBots: [...this.state.chosenBots, selectedBot]
    })
  }

  getData = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(res=>res.json()).then(res => this.setState({
      bots: res,
    }))
  }

  componentDidMount() {
    this.getData()
  }

  render() {

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy chosenBots = {this.state.chosenBots} handleDelete = {this.handleDelete}/>
        <BotCollection bots = {this.state.bots} handleClick = {this.handleClick} />

      </div>
    );
  }

}

export default BotsPage;
