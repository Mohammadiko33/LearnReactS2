import React from 'react'
import { Link } from 'react-router-dom';

export default function DeleteGameEnter() {
  return (
    <div>
      <img src="./43.Assets/Delete-Game-Enter.png" alt="DeleteGameEnter"/>
      <div className="deleteGameEnter">
      <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home" /> <Link to={'/'}>No</Link>  </p>
      <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/> <Link to={'/'}>Yes</Link>  </p>
      </div>
      </div>
  )
}
