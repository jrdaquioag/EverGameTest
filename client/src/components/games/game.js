import "../games/game.css";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import API from "../utils/API";

class Game extends Component {
    state = {
      game: {}
};

// componentDidMount() {
//     API.getGame(this.props.match.params.id)
//         .then(res => this.setState({ game: res.data }))
//         .catch(err => console.log(err));
// }

render() {
    return (

    <div className="container gameDiv">

        <div className="row">

            <div className="col-lg-4">

                <img src="https://cdn.shopify.com/s/files/1/1554/8435/products/GamingCodes.eu_CDkeys_Middle-Earth_Shadow_of_War_PC_Game_cover_large.jpg?v=1510236041" className="" alt="..."></img>

            </div>

            <div className="col-lg-5">

                <div className="gameDetails">
                    Name: Shadow of War
                    
                </div>

                <div className="gameDetails">
        
                    Details: Middle-earth: Shadow of War is an action role-playing video game developed by Monolith Productions and published by Warner Bros. Interactive Entertainment. It is the sequel to 2014's Middle-earth: Shadow of Mordor, and was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on October 10, 2017.

                    Shadow of War continues the previous game's narrative, which is based on J. R. R. Tolkien's legendarium and set between the events of The Hobbit and The Lord of the Rings. Like its predecessor, the game also takes heavy inspiration from director Peter Jackson's The Hobbit and The Lord of the Rings film adaptations. The player continues the story of the ranger Talion and the spirit of the elf lord Celebrimbor, who shares Talion's body, as they forge a new Ring of Power to amass an army to fight against Sauron. The game builds upon the "Nemesis System" introduced in Shadow of Mordor, allowing Talion to gain followers from several races of Middle-earth, including Uruks and Ologs, and plan out complex strategies using these to complete missions.

                    Shadow of War had a generally positive reaction from critics, albeit more mixed than its predecessor; praise was aimed towards the gameplay and an improved nemesis system, although story elements and changes made to established characters received some negative reactions, as well as the inclusion of microtransactions and loot boxes. A free-to-play companion game for iOS and Android devices was also released.[2] In July 2018, Warner Bros. Interactive Entertainment removed all microtransactions from the console/PC versions of Shadow of War.[3]

                </div>

            </div>

            <div className="col-lg-3 timeDiv">

                <div className="timeDetails">

                    Time: 20:20:20

                </div>

            </div>

        </div>

    </div>

    )};
}

export default Game;