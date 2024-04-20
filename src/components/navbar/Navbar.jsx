import React, { useState, useEffect } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import youtube_logo from '../../assets/youtube_logo.png';
import search_icon from '../../assets/search.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setSearchResults([]);
    }, [location]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        if (event.target.value.trim() !== '') {
            fetchSearchResults(event.target.value.trim());
        } else {
            setSearchResults([]);
        }
    };

    const fetchSearchResults = async (query) => {
        try {
            const API_KEY = 'AIzaSyB6wtzVttZQOZDD9sQQ1KD-RRCj7jOKuWI';
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=dog+${query}&maxResults=5`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data.items);
            } else {
                console.error('Failed to fetch search results');
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className='menu-icon' onClick={() => setSidebar((prev) => !prev)} src={menu_icon} alt='Menu' />
                <Link to='/'>
                    <img className='youtube-logo' src={youtube_logo} alt='YouTube' />
                </Link>
            </div>
            <div className='nav-middle flex-div'>
                <div className='search-bar flex-div'>
                    <input type='text' placeholder='Search' value={searchQuery} onChange={handleInputChange} />
                    <img className='search-icon' src={search_icon} alt='Search' />
                    <div className='search-results'>
                        {searchResults.map((result) => (
                            <div key={result.id.videoId} className='search-result'>
                                <Link to={`/video/${result.id.videoId}`}>
                                    <div className='video-info'>
                                        {/* <img className='search-icon' src={search_icon} alt='Search Image' /> */}
                                        <p>{result.snippet.title} {result.snippet.channelTitle}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='nav-right flex-div'>{/* Right side of the navbar */}</div>
        </nav>
    );
};

export default Navbar;