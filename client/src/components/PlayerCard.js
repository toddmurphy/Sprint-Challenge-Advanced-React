import React, { Component } from 'react';
import Player from './Player';


class PlayerCard extends Component {
// PlayerCard will hold state for Players
    state = {
        players: []
    }

    //get data from api --> 


    render() {
        return (
            <div>
                <h2>Player card --> display all players</h2>
                <Player />
            </div>
        )
    }
}

export default PlayerCard;