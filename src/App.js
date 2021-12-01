import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Lyric from './pages/Lyric';
import SongItem from './components/SongItem';

import './assets/item.css';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Lyric" element={<Lyric/>}>
        <Route path=":songId" element={<SongItem />} />
      </Route>
    </Routes>
  );
}

export default App;
