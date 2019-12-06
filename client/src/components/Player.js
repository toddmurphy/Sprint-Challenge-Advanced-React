import React from 'react';

const Player = (props) => {
    console.log(props)

    const { name, country, searches } = props.player;

    return (
        <div>
            {/* <p data-testid='earth-header'>Name {name}</p>
            <p data-testid='planet-header'>Country {country}</p> */}
            <p>Name {name}</p>
            <p>Country {country}</p>
            <p>Number of searches: {searches}</p>
        </div>
    )
}

export default Player;

// api response data structure
// country: "United States"
// id: 0
// name: "Alex Morgan"
// searches: 100