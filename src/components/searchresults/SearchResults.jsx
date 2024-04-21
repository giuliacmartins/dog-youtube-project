import React, { useEffect, useState } from 'react';
import './SearchResults.css';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';

const SearchResults = ({ searchQuery }) => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                if (!searchQuery) return; 
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=dog+${searchQuery}&maxResults=21`);
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

        fetchSearchResults();
    }, [searchQuery]);

    return (
        <div className="search-video-results">
            {searchResults.map((result) => (
                <div key={result.id.videoId} className="search-video-result">
                    <Link to={`/video/${result.id.videoId}`}>
                        <img
                            src={result.snippet.thumbnails.medium.url}
                            alt={result.snippet.title}
                        />
                    </Link>
                    <Link to={`/video/${result.id.videoId}`}>
                        <div className="search-video-info">
                            <h3>{result.snippet.title}</h3>
                            <h4>{result.snippet.channelTitle}</h4>
                            <p>{result.snippet.description}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
