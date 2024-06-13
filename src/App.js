// src/App.js
import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Artist = lazy(() => import("../src/Pages/Artist/Artist"));
const ArtistAlbum = lazy(() => import("../src/Pages/ArtistAlbum/ArtistAlbum"));
const ArtistTweet = lazy(() => import("../src/Pages/ArtistTweet/ArtistTweet"));


function App() {
  return (
    <Router>
      <div>
        <Suspense>
          <Routes>
            <Route path="/" element={<Artist />} />
            <Route path="/albums/:artistId" element={<ArtistAlbum />} />
            <Route path="/tweet" element={<ArtistTweet />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
