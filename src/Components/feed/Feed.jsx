import React from 'react'
import { useState, useEffect } from 'react'
import './Feed.css'
// is it working?
const Feed = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const API_KEY = 'AIzaSyAofAxJwSMwwQYiMwcUfLd2Yw183-rZfKo';
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
        fetchVideos();
    }, []);

    return (
        <div className="feed">
            {videos.map((video) => (
                <div key={video.id.videoId} className="video">
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <div className="video-info">
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.channelTitle}</p>
                        {/* <p>{video.snippet.description}</p> */}
                    </div>
                </a>
                </div>
            ))}
        </div>
    )
}

export default Feed 