import React, { useEffect, useState } from 'react';
import './SearchResults.css';
import profile from '../../assets/profile_colored.png';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';
import Sidebar from '../sidebar/Sidebar';

const SearchResults = ({ sidebar, searchQuery }) => {
    const [searchResults, setSearchResults] = useState([]); // store the search results

    // fetch search results when search query changes 
    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                if (!searchQuery) return; 
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=dog+${searchQuery}&maxResults=21`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data.items); // update search results state with fetched data 
                } else {
                    console.error('Failed to fetch search results');
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [searchQuery]);

    // format the published date
    const formatDateAgo = (publishedAt) => {
        const now = new Date();
        const publishedDate = new Date(publishedAt);
        const diffTime = Math.abs(now - publishedDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 30) {
            return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
        } else if (diffDays < 365) {
            const diffMonths = Math.floor(diffDays / 30);
            return `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
        } else {
            const diffYears = Math.floor(diffDays / 365);
            return `${diffYears} ${diffYears === 1 ? 'year' : 'years'} ago`;
        }
    };

    return (
        <div>
            {/* render when sidebar is true */}
            {sidebar && <Sidebar sidebar={sidebar} />}
            <div className="search-video-results">
                {searchResults.map((result) => (
                    <div key={result.id.videoId} className="search-video-result">
                        <Link to={`/video/${result.id.videoId}`}>
                            <div className="thumbnail-info-wrapper">
                                <img src={result.snippet.thumbnails.medium.url} alt={result.snippet.title} />
                                <div className="search-video-info">
                                    <h3>{result.snippet.title}</h3>
                                    <p>{formatDateAgo(result.snippet.publishedAt)}</p>
                                    <div className="channel">
                                        <img src={profile} alt="Profile" />
                                        <h4>{result.snippet.channelTitle}</h4>
                                    </div>
                                    <p>{result.snippet.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;