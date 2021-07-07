import React, { Component } from 'react';
import Player from './Player';
import axios from 'axios';


class PlayerCard extends Component {
// PlayerCard will hold state for Players
//set initial state
    state = {
        players: []
    }

    //get data from api --> http://localhost:5000/api/players
    //componentDidMount

    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
            .then(response => {
                console.log(response.data)
                this.setState({
                    players: response.data
                })
            })
            .catch(error => {
                console.log('No player data returned', error)
            })
    }



    render() {
        //destructure this.state
        const {players} = this.state;

        return (
                       
            players.map(player => {
                //destructure 'id' from player
                const {id} = player;

                return <Player key={id} player={player} />
            })
        )
    }
}

export default PlayerCard;

// api response data structure
// country: "United States"
// id: 0
// name: "Alex Morgan"
// searches: 100