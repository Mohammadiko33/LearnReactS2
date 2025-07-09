import React from 'react';
import './components/43.Games/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/43.Games/Home';
import NewGame from './components/43.Games/New-Game';
import NewGameEnter from './components/43.Games/New-Game-Enter';
import LoadGame from './components/43.Games/Load-Game'; 
import DeleteGame from './components/43.Games/Delete=Game';
import DeleteGameEnter from './components/43.Games/Delete-Game-Enter';

export default function App43() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-game' element={<NewGame />} />
          <Route path='/new-game-enter' element={<NewGameEnter />} />
          <Route path='/load-game' element={<LoadGame />} />
          <Route path='/delete-game' element={<DeleteGame />} />
          <Route path='/delete-game-enter' element={<DeleteGameEnter />} />
      </Routes>
    </div>
  );
}

// روتر یعنی صحفه بندی روت یعنی هر صحفه
// حتما حتما باید بروزر روتر در اینکس اچ تی ام ال باشه 