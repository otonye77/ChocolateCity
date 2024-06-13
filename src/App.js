
import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Artist = lazy(() => import("../src/Pages/Artist/Artist"));
const ArtistAlbum = lazy(() => import("../src/Pages/ArtistAlbum/ArtistAlbum"));
const Tweet = lazy(() => import("../src/Pages/ArtistTweet/Tweet"));


function App() {
  return (
    <Router>
      <div>
        <Suspense>
          <Routes>
            <Route path="/" element={<Artist />} />
            <Route path="/albums/:artistId" element={<ArtistAlbum />} />
            <Route path="/tweets/:artistId" element={<Tweet />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
