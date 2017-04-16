import React, { Component } from 'react';

import TitleBar from './TitleBar';
import AddPlayers from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle={'created by Corroxx'}/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayers/>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  title : React.PropTypes.string.isRequired,
  players : React.PropTypes.array.isRequired
}
