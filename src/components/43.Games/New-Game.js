import React from 'react'
import { Link } from 'react-router-dom';

export default function NewGame() {
  return (
    <div>
      <img src="./43.Assets/New-Game.png" alt="newGame"/>
      <div className="gameTiTles">
        <div className="NewGameOptions">
            <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/><Link to={'/new-game-enter'}> san andereas [standard game]</Link></p>
            <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/><Link to={'/new-game-enter'}> design your own mission </Link></p>
            <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/><Link to={'/new-game-enter'}> design your own mission v8.2 </Link></p>
            <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/><Link to={'/new-game-enter'} disable> design your own mission iX </Link></p>
        </div>
        <div className='LoadGameRevarse'><p className="gameTiTle"> <Link to={'/'}>Back</Link>  </p></div>
      </div>
      </div>
  )
}
// import { Link } from 'react-router-dom';
// <Link to={'/new-game-enter'}> </Link>