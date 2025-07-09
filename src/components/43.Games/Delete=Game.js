import React from 'react'
import { Link } from 'react-router-dom'

export default function DeleteGame() {
  return (
    <div>
      <img src="./43.Assets/Delete-Game.png" alt="DeleteGane"/>
      <div className="loadGameOptions">
      <div className="columnLoadGameOptions">
             <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/> <Link to={'/delete-game-enter'}>End of the line</Link>  </p>
              <p className="gameTiTle"> 21 may 2024 09:02:34</p>
          </div>
          <div className="columnLoadGameOptions">
             <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/> <Link to={'/delete-game-enter'}>End of the line</Link></p>
              <p className="gameTiTle">21 may 2024 09:02:34 </p>
          </div>
          <div className="columnLoadGameOptions">
             <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/> <Link to={'/delete-game-enter'}>verdant meadows </Link>  </p>
              <p className="gameTiTle">21 may 2024 09:02:34 </p>
          </div>
          <div className="columnLoadGameOptions">
             <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/> <Link to={'/delete-game-enter'}>wu zi mu</Link>  </p>
              <p className="gameTiTle">21 may 2024 09:02:34 </p>
          </div>
          <div className="columnLoadGameOptions">
             <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/><Link to={'/delete-game-enter'}>big smoke</Link>   </p>
              <p className="gameTiTle">21 may 2024 09:02:34 </p>
          </div>
              <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/> <Link to={'/'}>save file 6 not present</Link>   </p>
              <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/> <Link to={'/'}>save file 6 not present</Link>   </p>
          <div className="columnLoadGameOptions">
             <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/><Link to={'/delete-game-enter'}>End of the line</Link> </p>
              <p className="gameTiTle">21 may 2024 09:02:34 </p>
          </div>
        </div>
        <div className='LoadGameRevarse'><p className="gameTiTle"> <Link to={'/'}>Back</Link>  </p></div>
      </div>
  )
}
