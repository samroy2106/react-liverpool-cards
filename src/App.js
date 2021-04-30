import React from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { players } from './players';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({ players: players});
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredPlayers = this.state.players.filter(players =>{
      return players.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Liverpool Squad</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList players={filteredPlayers}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
