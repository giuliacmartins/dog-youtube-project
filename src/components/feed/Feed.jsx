import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';

const Feed = ({ selectedSearchResult, handleSearchResultClick }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (selectedSearchResult) {
            fetchSimilarVideos(selectedSearchResult.id.videoId);
        } else {
            fetchDefaultVideos();
        }
    }, [selectedSearchResult]);

    const fetchDefaultVideos = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=dog&maxResults=21`);
            if (response.ok) {
                const data = await response.json();
                setVideos(data.items);
            } else {
                console.error('Failed to fetch the videos');
            }
        } catch (error) {
            console.error('Error fetching the videos:', error);
        }
    };

    const fetchSimilarVideos = async (videoId) => {
        try {
            const API_KEY = 'AIzaSyBGhHGF2W7W22DYdOjImeOM25NjBRGjCFA';
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&relatedToVideoId=${videoId}&maxResults=21`);
            if (response.ok) {
                const data = await response.json();
                setVideos(data.items);
            } else {
                console.error('Failed to fetch similar videos');
            }
        } catch (error) {
            console.error('Error fetching similar videos:', error);
        }
    };

    return (
        <div className="feed">
            {videos.map((video) => (
                <Link to={`/video/${video.id.videoId}`} key={video.id.videoId} className="video">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <div className="video-info">
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.channelTitle}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Feed;