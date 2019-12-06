import React, { Component } from 'react';
import Player from './Player';
import axios from 'axios';


class PlayerCard extends Component {
// PlayerCard will hold state for Players
    state = {
        players: []
    }

    //get data from api --> http://localhost:5000/api/players
    //componentDidMount

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
            .then(response => {
                console.log(response)
                this.setState({
                    players: response
                })
            })
            .catch(error => {
                console.log('No player data returned', error)
            })
    }



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