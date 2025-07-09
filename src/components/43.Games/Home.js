import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <img src="./43.Assets/Home.png" alt="Home" />
      <div className="gameTiTles">
        <div className="homeGameOptions">
          <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/>
          <Link to={'/new-game'}>New game</Link></p>   
          <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/>
          <Link to={'/load-game'}>Load game</Link></p>   
          <p className="gameTiTle"><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/>
          <Link to={'/delete-game'}>Delete game</Link></p>   
        </div>
        <div className="homeGameBack">
          <p className="gameTiTle" onClick={() => alert('End Page ;) n Try Other Wave')}><img src="./43.Assets/hover.png" className="hoverdImage" alt="Home"/>back</p>
        </div>
      </div>
    </div>
  );
}
