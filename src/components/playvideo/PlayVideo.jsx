import React, { useState, useEffect } from 'react';
import './PlayVideo.css';
import profile from '../../assets/profile_colored.png';
import like from '../../assets/like_videos.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import download from '../../assets/download.png';
import three_dots from '../../assets/three_dots.png';
import { API_KEY } from '../../data';

const PlayVideo = ({ videoId }) => {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchVideoDetails = async () => {
            try {
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
        <div className="video-player">
            <iframe
                title="video"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
            ></iframe>
            <h3>{video.snippet.title}</h3>
            <div className="video-player-info">
                <div className="publisher">
                    <img src={profile} alt="Like" />
                    <p>{video.snippet.channelTitle}</p>
                </div>
                <div>
                    <span className="like"><img src={like} alt="Like" /></span>
                    <span className="dislike"><img src={dislike} alt="Dislike" /></span>
                    <span className="share"><img src={share} alt="Share" />Share</span>
                    <span className="download"><img src={download} alt="Download" />Download</span>
                    <span className="dots"><img src={three_dots} alt="Three Dots" /></span>
                </div>
            </div>
            <div className="description">
                <p><strong>{formatDateAgo(video.snippet.publishedAt)}</strong></p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default PlayVideo;