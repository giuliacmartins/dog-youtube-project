import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../data';

const Feed = ({ selectedSearchResult, handleSearchResultClick, sidebar }) => {
    const [videos, setVideos] = useState([]); // store the list of videos

    // fetch videos based on the selected search or default videos
    useEffect(() => {
        if (selectedSearchResult) {
            fetchSimilarVideos(selectedSearchResult.id.videoId);
        } else {
            fetchDefaultVideos();
        }
    }, [selectedSearchResult]);

    // fetch default videos 
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

    // fetch similar vidoes 
    const fetchSimilarVideos = async (videoId) => {
        try {
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

    // format the date
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
        <div className="feed">
            {/* iterate over the videos and create a link for each one */}
            {videos.map((video) => (
                <Link to={`/video/${video.id.videoId}`} key={video.id.videoId} className="video">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <div className="video-info">
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.channelTitle}</p> 
                        <p>{formatDateAgo(video.snippet.publishedAt)}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Feed;