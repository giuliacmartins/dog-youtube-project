import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Video from './pages/video/Video';
import SearchResults from './components/searchresults/SearchResults';

const App = () => {
  const [sidebar, setSidebar] = useState(true); // state for controlling the sidebar visibility
  const [searchQuery, setSearchQuery] = useState(''); // for search query
  const [searchResults, setSearchResults] = useState([]); // storing the search results

  return (
    <div>
      <Navbar setSidebar={setSidebar} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} searchResults={searchResults} />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/search/:query" element={<SearchResults sidebar={sidebar} searchQuery={searchQuery} setSearchResults={setSearchResults} setSidebar={setSidebar} />} />
      </Routes>
    </div>
  );
};

export default App;