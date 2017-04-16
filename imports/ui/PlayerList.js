import React, {Component} from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends Component {
  renderPlayers() {
    const playersList = this.props.players;
    if(playersList.length === 0) {
      return (
        <div className="item ">
          <p className="item__message">Add your first Player to get started</p>
        </div>
      )
    }
    return playersList.map(player => {
      return (
        <Player player={player} key={player._id}/>
    )
    })
  }
  render() {
    return (
      <div>
        <FlipMove duration={250} easing="ease-out" maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
