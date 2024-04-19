import React, { useState, useEffect } from 'react';
import './PlayVideo.css';

const PlayVideo = ({ videoId }) => {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
                const API_KEY = 'AIzaSyAofAxJwSMwwQYiMwcUfLd2Yw183-rZfKo';
                const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.items && data.items.length > 0) {
                        setVideo(data.items[0]);
                    } else {
                        console.error('Video not found');
                    }
                } else {
                    console.error('Failed to fetch the video details');
                }
            } catch (error) {
                console.error('Error fetching the video details:', error);
            }
        };
        fetchVideoDetails();
    }, [videoId]);

    if (!video || !video.snippet) {
        return <div>No video selected</div>;
    }

    return (
        <div className="video-player">
            <iframe
                title="video"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className="video-info">
                <h3>{video.snippet.title}</h3>
            </div>
            <div className="description">
                <h4>{video.snippet.channelTitle}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default PlayVideo;